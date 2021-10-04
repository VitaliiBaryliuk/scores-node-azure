// import { instance } from '../../common/logger';
// const path = require('path');
// const { spawn } = require('child_process');

// describe('common logger test', () => {
// 	const logger = instance('test: logger');

// 	test('Instance is return logger', () => {
// 		expect(logger).toBeDefined();
// 	});
	
// 	test('Logger info is called', () => {
// 		const spyLoggerInfo = jest.spyOn(logger, 'info').mockImplementation((msg) => msg);
// 		logger.info('Test logger info');

// 		expect(spyLoggerInfo).toHaveBeenCalled();
// 	});

// 	it('Logger info return correct value', (done) => {
// 		const testLoggerFilePath = path.join(
// 			__dirname,
// 			'testLoggerFile.js',
// 		);

// 		const testApp = spawn('node', [testLoggerFilePath]);

//     testApp.stdout.on('data', (data: any) => {
// 			console.log('+++++++++++++ DAATA ++++++++++++++', data)
// 			const stdoutData = JSON.parse(data.toString());
// 			console.log('+++++++++++++ DAATA ++++++++++++++', stdoutData)
//       expect(stdoutData.msg).toBe('param2sss');
//       expect(stdoutData.foo).toBe('bar');
//       testApp.kill('SIGINT');
//       done();
//     });
// 	});

// 	// instance('test logger').info({ foo: 'bar' }, 'param2');
// })

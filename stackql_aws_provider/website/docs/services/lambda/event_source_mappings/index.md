--- 
title: event_source_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - event_source_mappings
  - lambda
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>event_source_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_source_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.event_source_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_source_mapping"
    values={[
        { label: 'get_event_source_mapping', value: 'get_event_source_mapping' },
        { label: 'list_event_source_mappings', value: 'list_event_source_mappings' }
    ]}
>
<TabItem value="get_event_source_mapping">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="amazon_managed_kafka_event_source_config" /></td>
    <td><code>object</code></td>
    <td>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</td>
</tr>
<tr>
    <td><CopyableCode code="batch_size" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB). Default value: Varies by service. For Amazon SQS, the default is 10. For all other services, the default is 100. Related setting: When you set BatchSize to a value greater than 10, you must set MaximumBatchingWindowInSeconds to at least 1.</td>
</tr>
<tr>
    <td><CopyableCode code="bisect_batch_on_function_error" /></td>
    <td><code>boolean</code></td>
    <td>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) If the function returns an error, split the batch in two and retry. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_config" /></td>
    <td><code>object</code></td>
    <td>A configuration object that specifies the destination of an event after Lambda processes it. For more information, see Adding a destination.</td>
</tr>
<tr>
    <td><CopyableCode code="document_db_event_source_config" /></td>
    <td><code>object</code></td>
    <td>Specific configuration settings for a DocumentDB event source.</td>
</tr>
<tr>
    <td><CopyableCode code="event_source_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the event source. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;)+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_source_mapping_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the event source mapping. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:event-source-mapping:&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="filter_criteria" /></td>
    <td><code>object</code></td>
    <td>An object that contains the filters for an event source.</td>
</tr>
<tr>
    <td><CopyableCode code="filter_criteria_error" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an error related to filter criteria encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Lambda function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="function_response_types" /></td>
    <td><code>array</code></td>
    <td>(Kinesis, DynamoDB Streams, Amazon MSK, self-managed Apache Kafka, and Amazon SQS) A list of current response type enums applied to the event source mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Key Management Service (KMS) customer managed key that Lambda uses to encrypt your function's filter criteria. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z0-9-.&#93;+:.*)|()&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the event source mapping was last updated or that its state changed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_processing_result" /></td>
    <td><code>string</code></td>
    <td>The result of the event source mapping's last processing attempt.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_config" /></td>
    <td><code>object</code></td>
    <td>(Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. Use this configuration object to define the level of logs for your event source mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_batching_window_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure MaximumBatchingWindowInSeconds to any value from 0 seconds to 300 seconds in increments of seconds. For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change MaximumBatchingWindowInSeconds in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping. Related setting: For streams and Amazon SQS event sources, when you set BatchSize to a value greater than 10, you must set MaximumBatchingWindowInSeconds to at least 1.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_record_age_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records. The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_retry_attempts" /></td>
    <td><code>integer</code></td>
    <td>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_config" /></td>
    <td><code>object</code></td>
    <td>The metrics configuration for your event source. Use this configuration object to define which metrics you want your event source mapping to produce.</td>
</tr>
<tr>
    <td><CopyableCode code="parallelization_factor" /></td>
    <td><code>integer</code></td>
    <td>(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_poller_config" /></td>
    <td><code>object</code></td>
    <td>The provisioned mode configuration for the event source. Use Provisioned Mode to customize the minimum and maximum number of event pollers for your event source.</td>
</tr>
<tr>
    <td><CopyableCode code="queues" /></td>
    <td><code>array</code></td>
    <td>(Amazon MQ) The name of the Amazon MQ broker destination queue to consume.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_config" /></td>
    <td><code>object</code></td>
    <td>(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.</td>
</tr>
<tr>
    <td><CopyableCode code="self_managed_event_source" /></td>
    <td><code>object</code></td>
    <td>The self-managed Apache Kafka cluster for your event source.</td>
</tr>
<tr>
    <td><CopyableCode code="self_managed_kafka_event_source_config" /></td>
    <td><code>object</code></td>
    <td>Specific configuration settings for a self-managed Apache Kafka event source.</td>
</tr>
<tr>
    <td><CopyableCode code="source_access_configurations" /></td>
    <td><code>array</code></td>
    <td>An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.</td>
</tr>
<tr>
    <td><CopyableCode code="starting_position" /></td>
    <td><code>string</code></td>
    <td>The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. AT_TIMESTAMP is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka. (TRIM_HORIZON, LATEST, AT_TIMESTAMP)</td>
</tr>
<tr>
    <td><CopyableCode code="starting_position_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>With StartingPosition set to AT_TIMESTAMP, the time from which to start reading. StartingPositionTimestamp cannot be in the future.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the event source mapping. It can be one of the following: Creating, Enabling, Enabled, Disabling, Disabled, Updating, or Deleting.</td>
</tr>
<tr>
    <td><CopyableCode code="state_transition_reason" /></td>
    <td><code>string</code></td>
    <td>Indicates whether a user or Lambda made the last change to the event source mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>The name of the Kafka topic.</td>
</tr>
<tr>
    <td><CopyableCode code="tumbling_window_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The identifier of the event source mapping.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_source_mappings">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="amazon_managed_kafka_event_source_config" /></td>
    <td><code>object</code></td>
    <td>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</td>
</tr>
<tr>
    <td><CopyableCode code="batch_size" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB). Default value: Varies by service. For Amazon SQS, the default is 10. For all other services, the default is 100. Related setting: When you set BatchSize to a value greater than 10, you must set MaximumBatchingWindowInSeconds to at least 1.</td>
</tr>
<tr>
    <td><CopyableCode code="bisect_batch_on_function_error" /></td>
    <td><code>boolean</code></td>
    <td>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) If the function returns an error, split the batch in two and retry. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_config" /></td>
    <td><code>object</code></td>
    <td>A configuration object that specifies the destination of an event after Lambda processes it. For more information, see Adding a destination.</td>
</tr>
<tr>
    <td><CopyableCode code="document_db_event_source_config" /></td>
    <td><code>object</code></td>
    <td>Specific configuration settings for a DocumentDB event source.</td>
</tr>
<tr>
    <td><CopyableCode code="event_source_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the event source. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;)+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_source_mapping_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the event source mapping. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:event-source-mapping:&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="filter_criteria" /></td>
    <td><code>object</code></td>
    <td>An object that contains the filters for an event source.</td>
</tr>
<tr>
    <td><CopyableCode code="filter_criteria_error" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an error related to filter criteria encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Lambda function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="function_response_types" /></td>
    <td><code>array</code></td>
    <td>(Kinesis, DynamoDB Streams, Amazon MSK, self-managed Apache Kafka, and Amazon SQS) A list of current response type enums applied to the event source mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Key Management Service (KMS) customer managed key that Lambda uses to encrypt your function's filter criteria. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z0-9-.&#93;+:.*)|()&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the event source mapping was last updated or that its state changed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_processing_result" /></td>
    <td><code>string</code></td>
    <td>The result of the event source mapping's last processing attempt.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_config" /></td>
    <td><code>object</code></td>
    <td>(Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. Use this configuration object to define the level of logs for your event source mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_batching_window_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure MaximumBatchingWindowInSeconds to any value from 0 seconds to 300 seconds in increments of seconds. For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change MaximumBatchingWindowInSeconds in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping. Related setting: For streams and Amazon SQS event sources, when you set BatchSize to a value greater than 10, you must set MaximumBatchingWindowInSeconds to at least 1.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_record_age_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records. The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_retry_attempts" /></td>
    <td><code>integer</code></td>
    <td>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_config" /></td>
    <td><code>object</code></td>
    <td>The metrics configuration for your event source. Use this configuration object to define which metrics you want your event source mapping to produce.</td>
</tr>
<tr>
    <td><CopyableCode code="parallelization_factor" /></td>
    <td><code>integer</code></td>
    <td>(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_poller_config" /></td>
    <td><code>object</code></td>
    <td>The provisioned mode configuration for the event source. Use Provisioned Mode to customize the minimum and maximum number of event pollers for your event source.</td>
</tr>
<tr>
    <td><CopyableCode code="queues" /></td>
    <td><code>array</code></td>
    <td>(Amazon MQ) The name of the Amazon MQ broker destination queue to consume.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_config" /></td>
    <td><code>object</code></td>
    <td>(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.</td>
</tr>
<tr>
    <td><CopyableCode code="self_managed_event_source" /></td>
    <td><code>object</code></td>
    <td>The self-managed Apache Kafka cluster for your event source.</td>
</tr>
<tr>
    <td><CopyableCode code="self_managed_kafka_event_source_config" /></td>
    <td><code>object</code></td>
    <td>Specific configuration settings for a self-managed Apache Kafka event source.</td>
</tr>
<tr>
    <td><CopyableCode code="source_access_configurations" /></td>
    <td><code>array</code></td>
    <td>An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.</td>
</tr>
<tr>
    <td><CopyableCode code="starting_position" /></td>
    <td><code>string</code></td>
    <td>The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. AT_TIMESTAMP is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka. (TRIM_HORIZON, LATEST, AT_TIMESTAMP)</td>
</tr>
<tr>
    <td><CopyableCode code="starting_position_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>With StartingPosition set to AT_TIMESTAMP, the time from which to start reading. StartingPositionTimestamp cannot be in the future.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the event source mapping. It can be one of the following: Creating, Enabling, Enabled, Disabling, Disabled, Updating, or Deleting.</td>
</tr>
<tr>
    <td><CopyableCode code="state_transition_reason" /></td>
    <td><code>string</code></td>
    <td>Indicates whether a user or Lambda made the last change to the event source mapping.</td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td>The name of the Kafka topic.</td>
</tr>
<tr>
    <td><CopyableCode code="tumbling_window_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The identifier of the event source mapping.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_event_source_mapping"><CopyableCode code="get_event_source_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings.</td>
</tr>
<tr>
    <td><a href="#list_event_source_mappings"><CopyableCode code="list_event_source_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EventSourceArn"><code>EventSourceArn</code></a>, <a href="#parameter-FunctionName"><code>FunctionName</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists event source mappings. Specify an EventSourceArn to show only event source mappings for a single event source.</td>
</tr>
<tr>
    <td><a href="#create_event_source_mapping"><CopyableCode code="create_event_source_mapping" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FunctionName"><code>FunctionName</code></a></td>
    <td></td>
    <td>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function. For details about how to configure different event sources, see the following topics. Amazon DynamoDB Streams Amazon Kinesis Amazon SQS Amazon MQ and RabbitMQ Amazon MSK Apache Kafka Amazon DocumentDB The following error handling options are available for stream sources (DynamoDB, Kinesis, Amazon MSK, and self-managed Apache Kafka): BisectBatchOnFunctionError – If the function returns an error, split the batch in two and retry. MaximumRecordAgeInSeconds – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires MaximumRetryAttempts – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires. OnFailure – Send discarded records to an Amazon SQS queue, Amazon SNS topic, Kafka topic, or Amazon S3 bucket. For more information, see Adding a destination. The following option is available only for DynamoDB and Kinesis event sources: ParallelizationFactor – Process multiple batches from each shard concurrently. For information about which configuration parameters apply to each event source, see the following topics. Amazon DynamoDB Streams Amazon Kinesis Amazon SQS Amazon MQ and RabbitMQ Amazon MSK Apache Kafka Amazon DocumentDB</td>
</tr>
<tr>
    <td><a href="#update_event_source_mapping"><CopyableCode code="update_event_source_mapping" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location. For details about how to configure different event sources, see the following topics. Amazon DynamoDB Streams Amazon Kinesis Amazon SQS Amazon MQ and RabbitMQ Amazon MSK Apache Kafka Amazon DocumentDB The following error handling options are available for stream sources (DynamoDB, Kinesis, Amazon MSK, and self-managed Apache Kafka): BisectBatchOnFunctionError – If the function returns an error, split the batch in two and retry. MaximumRecordAgeInSeconds – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires MaximumRetryAttempts – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires. OnFailure – Send discarded records to an Amazon SQS queue, Amazon SNS topic, Kafka topic, or Amazon S3 bucket. For more information, see Adding a destination. The following option is available only for DynamoDB and Kinesis event sources: ParallelizationFactor – Process multiple batches from each shard concurrently. For information about which configuration parameters apply to each event source, see the following topics. Amazon DynamoDB Streams Amazon Kinesis Amazon SQS Amazon MQ and RabbitMQ Amazon MSK Apache Kafka Amazon DocumentDB</td>
</tr>
<tr>
    <td><a href="#delete_event_source_mapping"><CopyableCode code="delete_event_source_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings. When you delete an event source mapping, it enters a Deleting state and might not be completely deleted for several seconds.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The identifier of the event source mapping.</td>
</tr>
<tr id="parameter-EventSourceArn">
    <td><CopyableCode code="EventSourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the event source. Amazon Kinesis – The ARN of the data stream or a stream consumer. Amazon DynamoDB Streams – The ARN of the stream. Amazon Simple Queue Service – The ARN of the queue. Amazon Managed Streaming for Apache Kafka – The ARN of the cluster or the ARN of the VPC connection (for cross-account event source mappings). Amazon MQ – The ARN of the broker. Amazon DocumentDB – The ARN of the DocumentDB change stream.</td>
</tr>
<tr id="parameter-FunctionName">
    <td><CopyableCode code="FunctionName" /></td>
    <td><code>string</code></td>
    <td>The name or ARN of the Lambda function. Name formats Function name – MyFunction. Function ARN – arn:aws:lambda:us-west-2:123456789012:function:MyFunction. Version or Alias ARN – arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD. Partial ARN – 123456789012:function:MyFunction. The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned by a previous call.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of event source mappings to return. Note that ListEventSourceMappings returns a maximum of 100 items in each response, even if you set the number higher.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event_source_mapping"
    values={[
        { label: 'get_event_source_mapping', value: 'get_event_source_mapping' },
        { label: 'list_event_source_mappings', value: 'list_event_source_mappings' }
    ]}
>
<TabItem value="get_event_source_mapping">

Returns details about an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings.

```sql
SELECT
amazon_managed_kafka_event_source_config,
batch_size,
bisect_batch_on_function_error,
destination_config,
document_db_event_source_config,
event_source_arn,
event_source_mapping_arn,
filter_criteria,
filter_criteria_error,
function_arn,
function_response_types,
kms_key_arn,
last_modified,
last_processing_result,
logging_config,
maximum_batching_window_in_seconds,
maximum_record_age_in_seconds,
maximum_retry_attempts,
metrics_config,
parallelization_factor,
provisioned_poller_config,
queues,
scaling_config,
self_managed_event_source,
self_managed_kafka_event_source_config,
source_access_configurations,
starting_position,
starting_position_timestamp,
state,
state_transition_reason,
topics,
tumbling_window_in_seconds,
uuid
FROM aws.lambda.event_source_mappings
WHERE uuid = '{{ uuid }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_source_mappings">

Lists event source mappings. Specify an EventSourceArn to show only event source mappings for a single event source.

```sql
SELECT
amazon_managed_kafka_event_source_config,
batch_size,
bisect_batch_on_function_error,
destination_config,
document_db_event_source_config,
event_source_arn,
event_source_mapping_arn,
filter_criteria,
filter_criteria_error,
function_arn,
function_response_types,
kms_key_arn,
last_modified,
last_processing_result,
logging_config,
maximum_batching_window_in_seconds,
maximum_record_age_in_seconds,
maximum_retry_attempts,
metrics_config,
parallelization_factor,
provisioned_poller_config,
queues,
scaling_config,
self_managed_event_source,
self_managed_kafka_event_source_config,
source_access_configurations,
starting_position,
starting_position_timestamp,
state,
state_transition_reason,
topics,
tumbling_window_in_seconds,
uuid
FROM aws.lambda.event_source_mappings
WHERE region = '{{ region }}' -- required
AND EventSourceArn = '{{ EventSourceArn }}'
AND FunctionName = '{{ FunctionName }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_source_mapping"
    values={[
        { label: 'create_event_source_mapping', value: 'create_event_source_mapping' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_source_mapping">

Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function. For details about how to configure different event sources, see the following topics. Amazon DynamoDB Streams Amazon Kinesis Amazon SQS Amazon MQ and RabbitMQ Amazon MSK Apache Kafka Amazon DocumentDB The following error handling options are available for stream sources (DynamoDB, Kinesis, Amazon MSK, and self-managed Apache Kafka): BisectBatchOnFunctionError – If the function returns an error, split the batch in two and retry. MaximumRecordAgeInSeconds – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires MaximumRetryAttempts – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires. OnFailure – Send discarded records to an Amazon SQS queue, Amazon SNS topic, Kafka topic, or Amazon S3 bucket. For more information, see Adding a destination. The following option is available only for DynamoDB and Kinesis event sources: ParallelizationFactor – Process multiple batches from each shard concurrently. For information about which configuration parameters apply to each event source, see the following topics. Amazon DynamoDB Streams Amazon Kinesis Amazon SQS Amazon MQ and RabbitMQ Amazon MSK Apache Kafka Amazon DocumentDB

```sql
INSERT INTO aws.lambda.event_source_mappings (
EventSourceArn,
FunctionName,
Enabled,
BatchSize,
FilterCriteria,
KMSKeyArn,
MetricsConfig,
LoggingConfig,
ScalingConfig,
MaximumBatchingWindowInSeconds,
ParallelizationFactor,
StartingPosition,
StartingPositionTimestamp,
DestinationConfig,
MaximumRecordAgeInSeconds,
BisectBatchOnFunctionError,
MaximumRetryAttempts,
Tags,
TumblingWindowInSeconds,
Topics,
Queues,
SourceAccessConfigurations,
SelfManagedEventSource,
FunctionResponseTypes,
AmazonManagedKafkaEventSourceConfig,
SelfManagedKafkaEventSourceConfig,
DocumentDBEventSourceConfig,
ProvisionedPollerConfig,
region
)
SELECT 
'{{ EventSourceArn }}',
'{{ FunctionName }}' /* required */,
{{ Enabled }},
{{ BatchSize }},
'{{ FilterCriteria }}',
'{{ KMSKeyArn }}',
'{{ MetricsConfig }}',
'{{ LoggingConfig }}',
'{{ ScalingConfig }}',
{{ MaximumBatchingWindowInSeconds }},
{{ ParallelizationFactor }},
'{{ StartingPosition }}',
'{{ StartingPositionTimestamp }}',
'{{ DestinationConfig }}',
{{ MaximumRecordAgeInSeconds }},
{{ BisectBatchOnFunctionError }},
{{ MaximumRetryAttempts }},
'{{ Tags }}',
{{ TumblingWindowInSeconds }},
'{{ Topics }}',
'{{ Queues }}',
'{{ SourceAccessConfigurations }}',
'{{ SelfManagedEventSource }}',
'{{ FunctionResponseTypes }}',
'{{ AmazonManagedKafkaEventSourceConfig }}',
'{{ SelfManagedKafkaEventSourceConfig }}',
'{{ DocumentDBEventSourceConfig }}',
'{{ ProvisionedPollerConfig }}',
'{{ region }}'
RETURNING
amazon_managed_kafka_event_source_config,
batch_size,
bisect_batch_on_function_error,
destination_config,
document_db_event_source_config,
event_source_arn,
event_source_mapping_arn,
filter_criteria,
filter_criteria_error,
function_arn,
function_response_types,
kms_key_arn,
last_modified,
last_processing_result,
logging_config,
maximum_batching_window_in_seconds,
maximum_record_age_in_seconds,
maximum_retry_attempts,
metrics_config,
parallelization_factor,
provisioned_poller_config,
queues,
scaling_config,
self_managed_event_source,
self_managed_kafka_event_source_config,
source_access_configurations,
starting_position,
starting_position_timestamp,
state,
state_transition_reason,
topics,
tumbling_window_in_seconds,
uuid
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_source_mappings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_source_mappings resource.
    - name: EventSourceArn
      value: "{{ EventSourceArn }}"
    - name: FunctionName
      value: "{{ FunctionName }}"
    - name: Enabled
      value: {{ Enabled }}
    - name: BatchSize
      value: {{ BatchSize }}
    - name: FilterCriteria
      description: |
        An object that contains the filters for an event source.
      value:
        Filters:
          - Pattern: "{{ Pattern }}"
    - name: KMSKeyArn
      value: "{{ KMSKeyArn }}"
    - name: MetricsConfig
      description: |
        The metrics configuration for your event source. Use this configuration object to define which metrics you want your event source mapping to produce.
      value:
        Metrics:
          - "{{ Metrics }}"
    - name: LoggingConfig
      description: |
        (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. Use this configuration object to define the level of logs for your event source mapping.
      value:
        SystemLogLevel: "{{ SystemLogLevel }}"
    - name: ScalingConfig
      description: |
        (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.
      value:
        MaximumConcurrency: {{ MaximumConcurrency }}
    - name: MaximumBatchingWindowInSeconds
      value: {{ MaximumBatchingWindowInSeconds }}
    - name: ParallelizationFactor
      value: {{ ParallelizationFactor }}
    - name: StartingPosition
      value: "{{ StartingPosition }}"
      valid_values: ['TRIM_HORIZON', 'LATEST', 'AT_TIMESTAMP']
    - name: StartingPositionTimestamp
      value: "{{ StartingPositionTimestamp }}"
    - name: DestinationConfig
      description: |
        A configuration object that specifies the destination of an event after Lambda processes it. For more information, see Adding a destination.
      value:
        OnSuccess:
          Destination: "{{ Destination }}"
        OnFailure:
          Destination: "{{ Destination }}"
    - name: MaximumRecordAgeInSeconds
      value: {{ MaximumRecordAgeInSeconds }}
    - name: BisectBatchOnFunctionError
      value: {{ BisectBatchOnFunctionError }}
    - name: MaximumRetryAttempts
      value: {{ MaximumRetryAttempts }}
    - name: Tags
      value: "{{ Tags }}"
    - name: TumblingWindowInSeconds
      value: {{ TumblingWindowInSeconds }}
    - name: Topics
      value:
        - "{{ Topics }}"
    - name: Queues
      value:
        - "{{ Queues }}"
    - name: SourceAccessConfigurations
      value:
        - Type: "{{ Type }}"
          URI: "{{ URI }}"
    - name: SelfManagedEventSource
      description: |
        The self-managed Apache Kafka cluster for your event source.
      value:
        Endpoints: "{{ Endpoints }}"
    - name: FunctionResponseTypes
      value:
        - "{{ FunctionResponseTypes }}"
    - name: AmazonManagedKafkaEventSourceConfig
      description: |
        Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
      value:
        ConsumerGroupId: "{{ ConsumerGroupId }}"
        SchemaRegistryConfig:
          SchemaRegistryURI: "{{ SchemaRegistryURI }}"
          EventRecordFormat: "{{ EventRecordFormat }}"
          AccessConfigs:
            - Type: "{{ Type }}"
              URI: "{{ URI }}"
          SchemaValidationConfigs:
            - Attribute: "{{ Attribute }}"
    - name: SelfManagedKafkaEventSourceConfig
      description: |
        Specific configuration settings for a self-managed Apache Kafka event source.
      value:
        ConsumerGroupId: "{{ ConsumerGroupId }}"
        SchemaRegistryConfig:
          SchemaRegistryURI: "{{ SchemaRegistryURI }}"
          EventRecordFormat: "{{ EventRecordFormat }}"
          AccessConfigs:
            - Type: "{{ Type }}"
              URI: "{{ URI }}"
          SchemaValidationConfigs:
            - Attribute: "{{ Attribute }}"
    - name: DocumentDBEventSourceConfig
      description: |
        Specific configuration settings for a DocumentDB event source.
      value:
        DatabaseName: "{{ DatabaseName }}"
        CollectionName: "{{ CollectionName }}"
        FullDocument: "{{ FullDocument }}"
    - name: ProvisionedPollerConfig
      description: |
        The provisioned mode configuration for the event source. Use Provisioned Mode to customize the minimum and maximum number of event pollers for your event source.
      value:
        MinimumPollers: {{ MinimumPollers }}
        MaximumPollers: {{ MaximumPollers }}
        PollerGroupName: "{{ PollerGroupName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_source_mapping"
    values={[
        { label: 'update_event_source_mapping', value: 'update_event_source_mapping' }
    ]}
>
<TabItem value="update_event_source_mapping">

Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location. For details about how to configure different event sources, see the following topics. Amazon DynamoDB Streams Amazon Kinesis Amazon SQS Amazon MQ and RabbitMQ Amazon MSK Apache Kafka Amazon DocumentDB The following error handling options are available for stream sources (DynamoDB, Kinesis, Amazon MSK, and self-managed Apache Kafka): BisectBatchOnFunctionError – If the function returns an error, split the batch in two and retry. MaximumRecordAgeInSeconds – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires MaximumRetryAttempts – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires. OnFailure – Send discarded records to an Amazon SQS queue, Amazon SNS topic, Kafka topic, or Amazon S3 bucket. For more information, see Adding a destination. The following option is available only for DynamoDB and Kinesis event sources: ParallelizationFactor – Process multiple batches from each shard concurrently. For information about which configuration parameters apply to each event source, see the following topics. Amazon DynamoDB Streams Amazon Kinesis Amazon SQS Amazon MQ and RabbitMQ Amazon MSK Apache Kafka Amazon DocumentDB

```sql
UPDATE aws.lambda.event_source_mappings
SET 
FunctionName = '{{ FunctionName }}',
Enabled = {{ Enabled }},
BatchSize = {{ BatchSize }},
FilterCriteria = '{{ FilterCriteria }}',
KMSKeyArn = '{{ KMSKeyArn }}',
MetricsConfig = '{{ MetricsConfig }}',
LoggingConfig = '{{ LoggingConfig }}',
ScalingConfig = '{{ ScalingConfig }}',
MaximumBatchingWindowInSeconds = {{ MaximumBatchingWindowInSeconds }},
ParallelizationFactor = {{ ParallelizationFactor }},
DestinationConfig = '{{ DestinationConfig }}',
MaximumRecordAgeInSeconds = {{ MaximumRecordAgeInSeconds }},
BisectBatchOnFunctionError = {{ BisectBatchOnFunctionError }},
MaximumRetryAttempts = {{ MaximumRetryAttempts }},
TumblingWindowInSeconds = {{ TumblingWindowInSeconds }},
SourceAccessConfigurations = '{{ SourceAccessConfigurations }}',
FunctionResponseTypes = '{{ FunctionResponseTypes }}',
AmazonManagedKafkaEventSourceConfig = '{{ AmazonManagedKafkaEventSourceConfig }}',
SelfManagedKafkaEventSourceConfig = '{{ SelfManagedKafkaEventSourceConfig }}',
DocumentDBEventSourceConfig = '{{ DocumentDBEventSourceConfig }}',
ProvisionedPollerConfig = '{{ ProvisionedPollerConfig }}'
WHERE 
uuid = '{{ uuid }}' --required
AND region = '{{ region }}' --required
RETURNING
amazon_managed_kafka_event_source_config,
batch_size,
bisect_batch_on_function_error,
destination_config,
document_db_event_source_config,
event_source_arn,
event_source_mapping_arn,
filter_criteria,
filter_criteria_error,
function_arn,
function_response_types,
kms_key_arn,
last_modified,
last_processing_result,
logging_config,
maximum_batching_window_in_seconds,
maximum_record_age_in_seconds,
maximum_retry_attempts,
metrics_config,
parallelization_factor,
provisioned_poller_config,
queues,
scaling_config,
self_managed_event_source,
self_managed_kafka_event_source_config,
source_access_configurations,
starting_position,
starting_position_timestamp,
state,
state_transition_reason,
topics,
tumbling_window_in_seconds,
uuid;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_source_mapping"
    values={[
        { label: 'delete_event_source_mapping', value: 'delete_event_source_mapping' }
    ]}
>
<TabItem value="delete_event_source_mapping">

Deletes an event source mapping. You can get the identifier of a mapping from the output of ListEventSourceMappings. When you delete an event source mapping, it enters a Deleting state and might not be completely deleted for several seconds.

```sql
DELETE FROM aws.lambda.event_source_mappings
WHERE uuid = '{{ uuid }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

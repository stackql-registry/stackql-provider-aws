--- 
title: flow_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_logs
  - ec2
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

Creates, updates, deletes, gets or lists a <code>flow_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.flow_logs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flow_logs"
    values={[
        { label: 'describe_flow_logs', value: 'describe_flow_logs' }
    ]}
>
<TabItem value="describe_flow_logs">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time the flow log was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliverCrossAccountRole" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that allows the service to publish flow logs across accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliverLogsErrorMessage" /></td>
    <td><code>string</code></td>
    <td>Information about the error that occurred. Rate limited indicates that CloudWatch Logs throttling has been applied for one or more network interfaces, or that you've reached the limit on the number of log groups that you can create. Access error indicates that the IAM role associated with the flow log does not have sufficient permissions to publish to CloudWatch Logs. Unknown error indicates an internal error.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliverLogsPermissionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role allows the service to publish logs to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliverLogsStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the logs delivery (SUCCESS | FAILED).</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationOptions" /></td>
    <td><code>string</code></td>
    <td>The destination options.</td>
</tr>
<tr>
    <td><CopyableCode code="FlowLogId" /></td>
    <td><code>string</code></td>
    <td>The ID of the flow log.</td>
</tr>
<tr>
    <td><CopyableCode code="FlowLogStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the flow log (ACTIVE).</td>
</tr>
<tr>
    <td><CopyableCode code="LogDestination" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the destination for the flow log data.</td>
</tr>
<tr>
    <td><CopyableCode code="LogDestinationType" /></td>
    <td><code>string</code></td>
    <td>The type of destination for the flow log data.</td>
</tr>
<tr>
    <td><CopyableCode code="LogFormat" /></td>
    <td><code>string</code></td>
    <td>The format of the flow log record.</td>
</tr>
<tr>
    <td><CopyableCode code="LogGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the flow log group.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxAggregationInterval" /></td>
    <td><code>integer</code></td>
    <td>The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record. When a network interface is attached to a Nitro-based instance, the aggregation interval is always 60 seconds (1 minute) or less, regardless of the specified value. Valid Values: 60 | 600</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource being monitored.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the flow log.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficType" /></td>
    <td><code>string</code></td>
    <td>The type of traffic captured for the flow log.</td>
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
    <td><a href="#describe_flow_logs"><CopyableCode code="describe_flow_logs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-FlowLogId"><code>FlowLogId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes one or more flow logs. To view the published flow log records, you must view the log destination. For example, the CloudWatch Logs log group, the Amazon S3 bucket, or the Kinesis Data Firehose delivery stream.</td>
</tr>
<tr>
    <td><a href="#create_flow_logs"><CopyableCode code="create_flow_logs" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DeliverLogsPermissionArn"><code>DeliverLogsPermissionArn</code></a>, <a href="#parameter-DeliverCrossAccountRole"><code>DeliverCrossAccountRole</code></a>, <a href="#parameter-LogGroupName"><code>LogGroupName</code></a>, <a href="#parameter-TrafficType"><code>TrafficType</code></a>, <a href="#parameter-LogDestinationType"><code>LogDestinationType</code></a>, <a href="#parameter-LogDestination"><code>LogDestination</code></a>, <a href="#parameter-LogFormat"><code>LogFormat</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-MaxAggregationInterval"><code>MaxAggregationInterval</code></a>, <a href="#parameter-DestinationOptions"><code>DestinationOptions</code></a></td>
    <td>Creates one or more flow logs to capture information about IP traffic for a specific network interface, subnet, or VPC. Flow log data for a monitored network interface is recorded as flow log records, which are log events consisting of fields that describe the traffic flow. For more information, see Flow log records in the Amazon VPC User Guide. When publishing to CloudWatch Logs, flow log records are published to a log group, and each network interface has a unique log stream in the log group. When publishing to Amazon S3, flow log records for all of the monitored network interfaces are published to a single log file object that is stored in the specified bucket. For more information, see VPC Flow Logs in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_flow_logs"><CopyableCode code="delete_flow_logs" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-FlowLogId"><code>FlowLogId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes one or more flow logs.</td>
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
<tr id="parameter-FlowLogId">
    <td><CopyableCode code="FlowLogId" /></td>
    <td><code>array</code></td>
    <td>One or more flow log IDs. Constraint: Maximum of 1000 flow log IDs.</td>
</tr>
<tr id="parameter-ResourceId">
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the resources to monitor. For example, if the resource type is VPC, specify the IDs of the VPCs. Constraints: Maximum of 25 for transit gateway resource types. Maximum of 1000 for the other resource types.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource to monitor.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-DeliverCrossAccountRole">
    <td><CopyableCode code="DeliverCrossAccountRole" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.</td>
</tr>
<tr id="parameter-DeliverLogsPermissionArn">
    <td><CopyableCode code="DeliverLogsPermissionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that allows Amazon EC2 to publish flow logs to the log destination. This parameter is required if the destination type is cloud-watch-logs, or if the destination type is kinesis-data-firehose and the delivery stream and the resources to monitor are in different accounts.</td>
</tr>
<tr id="parameter-DestinationOptions">
    <td><CopyableCode code="DestinationOptions" /></td>
    <td><code>object</code></td>
    <td>The destination options.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. deliver-log-status - The status of the logs delivery (SUCCESS | FAILED). log-destination-type - The type of destination for the flow log data (cloud-watch-logs | s3 | kinesis-data-firehose). flow-log-id - The ID of the flow log. log-group-name - The name of the log group. resource-id - The ID of the VPC, subnet, or network interface. traffic-type - The type of traffic (ACCEPT | REJECT | ALL). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-FlowLogId">
    <td><CopyableCode code="FlowLogId" /></td>
    <td><code>array</code></td>
    <td>One or more flow log IDs. Constraint: Maximum of 1000 flow log IDs.</td>
</tr>
<tr id="parameter-LogDestination">
    <td><CopyableCode code="LogDestination" /></td>
    <td><code>string</code></td>
    <td>The destination for the flow log data. The meaning of this parameter depends on the destination type. If the destination type is cloud-watch-logs, specify the ARN of a CloudWatch Logs log group. For example: arn:aws:logs:region:account_id:log-group:my_group Alternatively, use the LogGroupName parameter. If the destination type is s3, specify the ARN of an S3 bucket. For example: arn:aws:s3:::my_bucket/my_subfolder/ The subfolder is optional. Note that you can't use AWSLogs as a subfolder name. If the destination type is kinesis-data-firehose, specify the ARN of a Kinesis Data Firehose delivery stream. For example: arn:aws:firehose:region:account_id:deliverystream:my_stream</td>
</tr>
<tr id="parameter-LogDestinationType">
    <td><CopyableCode code="LogDestinationType" /></td>
    <td><code>string</code></td>
    <td>The type of destination for the flow log data. Default: cloud-watch-logs</td>
</tr>
<tr id="parameter-LogFormat">
    <td><CopyableCode code="LogFormat" /></td>
    <td><code>string</code></td>
    <td>The fields to include in the flow log record. List the fields in the order in which they should appear. If you omit this parameter, the flow log is created using the default format. If you specify this parameter, you must include at least one field. For more information about the available fields, see Flow log records in the Amazon VPC User Guide or Transit Gateway Flow Log records in the Amazon Web Services Transit Gateway Guide. Specify the fields using the $&#123;field-id&#125; format, separated by spaces.</td>
</tr>
<tr id="parameter-LogGroupName">
    <td><CopyableCode code="LogGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. This parameter is valid only if the destination type is cloud-watch-logs.</td>
</tr>
<tr id="parameter-MaxAggregationInterval">
    <td><CopyableCode code="MaxAggregationInterval" /></td>
    <td><code>integer</code></td>
    <td>The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. The possible values are 60 seconds (1 minute) or 600 seconds (10 minutes). This parameter must be 60 seconds for transit gateway resource types. When a network interface is attached to a Nitro-based instance, the aggregation interval is always 60 seconds or less, regardless of the value that you specify. Default: 600</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of items. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the flow logs.</td>
</tr>
<tr id="parameter-TrafficType">
    <td><CopyableCode code="TrafficType" /></td>
    <td><code>string</code></td>
    <td>The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic). This parameter is not supported for transit gateway resource types. It is required for the other resource types.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_flow_logs"
    values={[
        { label: 'describe_flow_logs', value: 'describe_flow_logs' }
    ]}
>
<TabItem value="describe_flow_logs">

Describes one or more flow logs. To view the published flow log records, you must view the log destination. For example, the CloudWatch Logs log group, the Amazon S3 bucket, or the Kinesis Data Firehose delivery stream.

```sql
SELECT
CreationTime,
DeliverCrossAccountRole,
DeliverLogsErrorMessage,
DeliverLogsPermissionArn,
DeliverLogsStatus,
DestinationOptions,
FlowLogId,
FlowLogStatus,
LogDestination,
LogDestinationType,
LogFormat,
LogGroupName,
MaxAggregationInterval,
ResourceId,
Tags,
TrafficType
FROM aws.ec2.flow_logs
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND FlowLogId = '{{ FlowLogId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flow_logs"
    values={[
        { label: 'create_flow_logs', value: 'create_flow_logs' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flow_logs">

Creates one or more flow logs to capture information about IP traffic for a specific network interface, subnet, or VPC. Flow log data for a monitored network interface is recorded as flow log records, which are log events consisting of fields that describe the traffic flow. For more information, see Flow log records in the Amazon VPC User Guide. When publishing to CloudWatch Logs, flow log records are published to a log group, and each network interface has a unique log stream in the log group. When publishing to Amazon S3, flow log records for all of the monitored network interfaces are published to a single log file object that is stored in the specified bucket. For more information, see VPC Flow Logs in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.flow_logs (
ResourceId,
ResourceType,
region,
DryRun,
ClientToken,
DeliverLogsPermissionArn,
DeliverCrossAccountRole,
LogGroupName,
TrafficType,
LogDestinationType,
LogDestination,
LogFormat,
TagSpecification,
MaxAggregationInterval,
DestinationOptions
)
SELECT 
'{{ ResourceId }}',
'{{ ResourceType }}',
'{{ region }}',
'{{ DryRun }}',
'{{ ClientToken }}',
'{{ DeliverLogsPermissionArn }}',
'{{ DeliverCrossAccountRole }}',
'{{ LogGroupName }}',
'{{ TrafficType }}',
'{{ LogDestinationType }}',
'{{ LogDestination }}',
'{{ LogFormat }}',
'{{ TagSpecification }}',
'{{ MaxAggregationInterval }}',
'{{ DestinationOptions }}'
RETURNING
ClientToken,
FlowLogIds,
Unsuccessful
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flow_logs
  props:
    - name: ResourceId
      value: "{{ ResourceId }}"
      description: Required parameter for the flow_logs resource.
    - name: ResourceType
      value: "{{ ResourceType }}"
      description: Required parameter for the flow_logs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flow_logs resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
    - name: DeliverLogsPermissionArn
      value: "{{ DeliverLogsPermissionArn }}"
      description: The ARN of the IAM role that allows Amazon EC2 to publish flow logs to the log destination. This parameter is required if the destination type is cloud-watch-logs, or if the destination type is kinesis-data-firehose and the delivery stream and the resources to monitor are in different accounts.
      description: The ARN of the IAM role that allows Amazon EC2 to publish flow logs to the log destination. This parameter is required if the destination type is cloud-watch-logs, or if the destination type is kinesis-data-firehose and the delivery stream and the resources to monitor are in different accounts.
    - name: DeliverCrossAccountRole
      value: "{{ DeliverCrossAccountRole }}"
      description: The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.
      description: The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.
    - name: LogGroupName
      value: "{{ LogGroupName }}"
      description: The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. This parameter is valid only if the destination type is cloud-watch-logs.
      description: The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. This parameter is valid only if the destination type is cloud-watch-logs.
    - name: TrafficType
      value: "{{ TrafficType }}"
      description: The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic). This parameter is not supported for transit gateway resource types. It is required for the other resource types.
      description: The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic). This parameter is not supported for transit gateway resource types. It is required for the other resource types.
    - name: LogDestinationType
      value: "{{ LogDestinationType }}"
      description: The type of destination for the flow log data. Default: cloud-watch-logs
      description: The type of destination for the flow log data. Default: cloud-watch-logs
    - name: LogDestination
      value: "{{ LogDestination }}"
      description: The destination for the flow log data. The meaning of this parameter depends on the destination type. If the destination type is cloud-watch-logs, specify the ARN of a CloudWatch Logs log group. For example: arn:aws:logs:region:account_id:log-group:my_group Alternatively, use the LogGroupName parameter. If the destination type is s3, specify the ARN of an S3 bucket. For example: arn:aws:s3:::my_bucket/my_subfolder/ The subfolder is optional. Note that you can't use AWSLogs as a subfolder name. If the destination type is kinesis-data-firehose, specify the ARN of a Kinesis Data Firehose delivery stream. For example: arn:aws:firehose:region:account_id:deliverystream:my_stream
      description: The destination for the flow log data. The meaning of this parameter depends on the destination type. If the destination type is cloud-watch-logs, specify the ARN of a CloudWatch Logs log group. For example: arn:aws:logs:region:account_id:log-group:my_group Alternatively, use the LogGroupName parameter. If the destination type is s3, specify the ARN of an S3 bucket. For example: arn:aws:s3:::my_bucket/my_subfolder/ The subfolder is optional. Note that you can't use AWSLogs as a subfolder name. If the destination type is kinesis-data-firehose, specify the ARN of a Kinesis Data Firehose delivery stream. For example: arn:aws:firehose:region:account_id:deliverystream:my_stream
    - name: LogFormat
      value: "{{ LogFormat }}"
      description: The fields to include in the flow log record. List the fields in the order in which they should appear. If you omit this parameter, the flow log is created using the default format. If you specify this parameter, you must include at least one field. For more information about the available fields, see Flow log records in the Amazon VPC User Guide or Transit Gateway Flow Log records in the Amazon Web Services Transit Gateway Guide. Specify the fields using the \${field-id} format, separated by spaces.
      description: The fields to include in the flow log record. List the fields in the order in which they should appear. If you omit this parameter, the flow log is created using the default format. If you specify this parameter, you must include at least one field. For more information about the available fields, see Flow log records in the Amazon VPC User Guide or Transit Gateway Flow Log records in the Amazon Web Services Transit Gateway Guide. Specify the fields using the \${field-id} format, separated by spaces.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the flow logs.
      description: The tags to apply to the flow logs.
    - name: MaxAggregationInterval
      value: {{ MaxAggregationInterval }}
      description: The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. The possible values are 60 seconds (1 minute) or 600 seconds (10 minutes). This parameter must be 60 seconds for transit gateway resource types. When a network interface is attached to a Nitro-based instance, the aggregation interval is always 60 seconds or less, regardless of the value that you specify. Default: 600
      description: The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. The possible values are 60 seconds (1 minute) or 600 seconds (10 minutes). This parameter must be 60 seconds for transit gateway resource types. When a network interface is attached to a Nitro-based instance, the aggregation interval is always 60 seconds or less, regardless of the value that you specify. Default: 600
    - name: DestinationOptions
      value: "{{ DestinationOptions }}"
      description: The destination options.
      description: The destination options.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_flow_logs"
    values={[
        { label: 'delete_flow_logs', value: 'delete_flow_logs' }
    ]}
>
<TabItem value="delete_flow_logs">

Deletes one or more flow logs.

```sql
DELETE FROM aws.ec2.flow_logs
WHERE FlowLogId = '{{ FlowLogId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>

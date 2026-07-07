--- 
title: log_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - log_groups
  - logs
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

Creates, updates, deletes, gets or lists a <code>log_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.log_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_log_groups"
    values={[
        { label: 'describe_log_groups', value: 'describe_log_groups' }
    ]}
>
<TabItem value="describe_log_groups">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the log group. This version of the ARN includes a trailing :* after the log group name. Use this version to refer to the ARN in IAM policies when specifying permissions for most API actions. The exception is when specifying permissions for TagResource, UntagResource, and ListTagsForResource. The permissions for those three actions require the ARN version that doesn't include a trailing :*.</td>
</tr>
<tr>
    <td><CopyableCode code="bearerTokenAuthenticationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether bearer token authentication is enabled for this log group. When enabled, bearer token authentication is allowed on operations until it is explicitly disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The creation time of the log group, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="dataProtectionStatus" /></td>
    <td><code>string</code></td>
    <td>Displays whether this log group has a protection policy, or whether it had one in the past. For more information, see PutDataProtectionPolicy. (ACTIVATED, DELETED, ARCHIVED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether deletion protection is enabled for this log group. When enabled, deletion protection blocks all deletion operations until it is explicitly disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="inheritedProperties" /></td>
    <td><code>array</code></td>
    <td>Displays all the properties that this log group has inherited from account-level settings.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data.</td>
</tr>
<tr>
    <td><CopyableCode code="logGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the log group. This version of the ARN doesn't include a trailing :* after the log group name. Use this version to refer to the ARN in the following situations: In the logGroupIdentifier input field in many CloudWatch Logs APIs. In the resourceArn field in tagging APIs In IAM policies, when specifying permissions for TagResource, UntagResource, and ListTagsForResource.</td>
</tr>
<tr>
    <td><CopyableCode code="logGroupClass" /></td>
    <td><code>string</code></td>
    <td>This specifies the log group class for this log group. There are three classes: The Standard log class supports all CloudWatch Logs features. The Infrequent Access log class supports a subset of CloudWatch Logs features and incurs lower costs. Use the Delivery log class only for delivering Lambda logs to store in Amazon S3 or Amazon Data Firehose. Log events in log groups in the Delivery class are kept in CloudWatch Logs for only one day. This log class doesn't offer rich CloudWatch Logs capabilities such as CloudWatch Logs Insights queries. For details about the features supported by the Standard and Infrequent Access classes, see Log classes (STANDARD, INFREQUENT_ACCESS, DELIVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="logGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the log group. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metricFilterCount" /></td>
    <td><code>integer</code></td>
    <td>The number of metric filters.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionInDays" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653. To set a log group so that its log events do not expire, use DeleteRetentionPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="storedBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of bytes stored.</td>
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
    <td><a href="#describe_log_groups"><CopyableCode code="describe_log_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about log groups, including data sources that ingest into each log group. You can return all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name. CloudWatch Logs doesn't support IAM policies that control access to the DescribeLogGroups action by using the aws:ResourceTag/key-name condition key. Other CloudWatch Logs actions do support the use of the aws:ResourceTag/key-name condition key to control access. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability.</td>
</tr>
<tr>
    <td><a href="#create_log_group"><CopyableCode code="create_log_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a></td>
    <td></td>
    <td>Creates a log group with the specified name. You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group: Log group names must be unique within a Region for an Amazon Web Services account. Log group names can be between 1 and 512 characters long. Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign) Log group names can't start with the string aws/ When you create a log group, by default the log events in the log group do not expire. To set a retention policy so that events expire and are deleted after a specified time, use PutRetentionPolicy. If you associate an KMS key with the log group, ingested data is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested. If you attempt to associate a KMS key with the log group but the KMS key does not exist or the KMS key is disabled, you receive an InvalidParameterException error. CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group. For more information, see Using Symmetric and Asymmetric Keys.</td>
</tr>
<tr>
    <td><a href="#put_bearer_token_authentication"><CopyableCode code="put_bearer_token_authentication" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupIdentifier"><code>logGroupIdentifier</code></a>, <a href="#parameter-bearerTokenAuthenticationEnabled"><code>bearerTokenAuthenticationEnabled</code></a></td>
    <td></td>
    <td>Enables or disables bearer token authentication for the specified log group. When enabled on a log group, bearer token authentication is enabled on operations until it is explicitly disabled. For information about the parameters that are common to all actions, see Common Parameters.</td>
</tr>
<tr>
    <td><a href="#put_log_group_deletion_protection"><CopyableCode code="put_log_group_deletion_protection" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupIdentifier"><code>logGroupIdentifier</code></a>, <a href="#parameter-deletionProtectionEnabled"><code>deletionProtectionEnabled</code></a></td>
    <td></td>
    <td>Enables or disables deletion protection for the specified log group. When enabled on a log group, deletion protection blocks all deletion operations until it is explicitly disabled. For information about the parameters that are common to all actions, see Common Parameters.</td>
</tr>
<tr>
    <td><a href="#put_retention_policy"><CopyableCode code="put_retention_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a>, <a href="#parameter-retentionInDays"><code>retentionInDays</code></a></td>
    <td></td>
    <td>Sets the retention of the specified log group. With a retention policy, you can configure the number of days for which to retain log events in the specified log group. CloudWatch Logs doesn't immediately delete log events when they reach their retention setting. It typically takes up to 72 hours after that before log events are deleted, but in rare situations might take longer. To illustrate, imagine that you change a log group to have a longer retention setting when it contains log events that are past the expiration date, but haven't been deleted. Those log events will take up to 72 hours to be deleted after the new retention date is reached. To make sure that log data is deleted permanently, keep a log group at its lower retention setting until 72 hours after the previous retention period ends. Alternatively, wait to change the retention setting until you confirm that the earlier log events are deleted. When log events reach their retention setting they are marked for deletion. After they are marked for deletion, they do not add to your archival storage costs anymore, even if they are not actually deleted until later. These log events marked for deletion are also not included when you use an API to retrieve the storedBytes value to see how many bytes a log group is storing.</td>
</tr>
<tr>
    <td><a href="#delete_log_group"><CopyableCode code="delete_log_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified log group and permanently deletes all the archived log events associated with the log group.</td>
</tr>
<tr>
    <td><a href="#delete_retention_policy"><CopyableCode code="delete_retention_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a></td>
    <td></td>
    <td>Deletes the specified retention policy. Log events do not expire if they belong to log groups without a retention policy.</td>
</tr>
<tr>
    <td><a href="#list_log_groups"><CopyableCode code="list_log_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of log groups in the Region in your account. If you are performing this action in a monitoring account, you can choose to also return log groups from source accounts that are linked to the monitoring account. For more information about using cross-account observability to set up monitoring accounts and source accounts, see CloudWatch cross-account observability. You can optionally filter the results by log group class, log group name pattern, field indexes, data sources, field index names, or log group tags. If you specify more than one filter type, the results include log groups that satisfy all filters. This operation is paginated. By default, your first use of this operation returns 50 results, and includes a token to use in a subsequent operation to return more results.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_log_groups"
    values={[
        { label: 'describe_log_groups', value: 'describe_log_groups' }
    ]}
>
<TabItem value="describe_log_groups">

Returns information about log groups, including data sources that ingest into each log group. You can return all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name. CloudWatch Logs doesn't support IAM policies that control access to the DescribeLogGroups action by using the aws:ResourceTag/key-name condition key. Other CloudWatch Logs actions do support the use of the aws:ResourceTag/key-name condition key to control access. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability.

```sql
SELECT
arn,
bearerTokenAuthenticationEnabled,
creationTime,
dataProtectionStatus,
deletionProtectionEnabled,
inheritedProperties,
kmsKeyId,
logGroupArn,
logGroupClass,
logGroupName,
metricFilterCount,
retentionInDays,
storedBytes
FROM aws.logs.log_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_log_group"
    values={[
        { label: 'create_log_group', value: 'create_log_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_log_group">

Creates a log group with the specified name. You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group: Log group names must be unique within a Region for an Amazon Web Services account. Log group names can be between 1 and 512 characters long. Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign) Log group names can't start with the string aws/ When you create a log group, by default the log events in the log group do not expire. To set a retention policy so that events expire and are deleted after a specified time, use PutRetentionPolicy. If you associate an KMS key with the log group, ingested data is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested. If you attempt to associate a KMS key with the log group but the KMS key does not exist or the KMS key is disabled, you receive an InvalidParameterException error. CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group. For more information, see Using Symmetric and Asymmetric Keys.

```sql
INSERT INTO aws.logs.log_groups (
logGroupName,
kmsKeyId,
tags,
logGroupClass,
deletionProtectionEnabled,
region
)
SELECT 
'{{ logGroupName }}' /* required */,
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ logGroupClass }}',
{{ deletionProtectionEnabled }},
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: log_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the log_groups resource.
    - name: logGroupName
      value: "{{ logGroupName }}"
      description: |
        A name for the log group.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data. For more information, see Amazon Resource Names.
    - name: tags
      value: "{{ tags }}"
      description: |
        The key-value pairs to use for the tags. You can grant users access to certain log groups while preventing them from accessing other log groups. To do so, tag your groups and use IAM policies that refer to those tags. To assign tags when you create a log group, you must have either the logs:TagResource or logs:TagLogGroup permission. For more information about tagging, see Tagging Amazon Web Services resources. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags.
    - name: logGroupClass
      value: "{{ logGroupClass }}"
      description: |
        Use this parameter to specify the log group class for this log group. There are three classes: The Standard log class supports all CloudWatch Logs features. The Infrequent Access log class supports a subset of CloudWatch Logs features and incurs lower costs. Use the Delivery log class only for delivering Lambda logs to store in Amazon S3 or Amazon Data Firehose. Log events in log groups in the Delivery class are kept in CloudWatch Logs for only one day. This log class doesn't offer rich CloudWatch Logs capabilities such as CloudWatch Logs Insights queries. If you omit this parameter, the default of STANDARD is used. The value of logGroupClass can't be changed after a log group is created. For details about the features supported by each class, see Log classes
      valid_values: ['STANDARD', 'INFREQUENT_ACCESS', 'DELIVERY']
    - name: deletionProtectionEnabled
      value: {{ deletionProtectionEnabled }}
      description: |
        Use this parameter to enable deletion protection for the new log group. When enabled on a log group, deletion protection blocks all deletion operations until it is explicitly disabled. By default log groups are created without deletion protection enabled.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bearer_token_authentication"
    values={[
        { label: 'put_bearer_token_authentication', value: 'put_bearer_token_authentication' },
        { label: 'put_log_group_deletion_protection', value: 'put_log_group_deletion_protection' },
        { label: 'put_retention_policy', value: 'put_retention_policy' }
    ]}
>
<TabItem value="put_bearer_token_authentication">

Enables or disables bearer token authentication for the specified log group. When enabled on a log group, bearer token authentication is enabled on operations until it is explicitly disabled. For information about the parameters that are common to all actions, see Common Parameters.

```sql
REPLACE aws.logs.log_groups
SET 
logGroupIdentifier = '{{ logGroupIdentifier }}',
bearerTokenAuthenticationEnabled = {{ bearerTokenAuthenticationEnabled }}
WHERE 
region = '{{ region }}' --required
AND logGroupIdentifier = '{{ logGroupIdentifier }}' --required
AND bearerTokenAuthenticationEnabled = {{ bearerTokenAuthenticationEnabled }} --required;
```
</TabItem>
<TabItem value="put_log_group_deletion_protection">

Enables or disables deletion protection for the specified log group. When enabled on a log group, deletion protection blocks all deletion operations until it is explicitly disabled. For information about the parameters that are common to all actions, see Common Parameters.

```sql
REPLACE aws.logs.log_groups
SET 
logGroupIdentifier = '{{ logGroupIdentifier }}',
deletionProtectionEnabled = {{ deletionProtectionEnabled }}
WHERE 
region = '{{ region }}' --required
AND logGroupIdentifier = '{{ logGroupIdentifier }}' --required
AND deletionProtectionEnabled = {{ deletionProtectionEnabled }} --required;
```
</TabItem>
<TabItem value="put_retention_policy">

Sets the retention of the specified log group. With a retention policy, you can configure the number of days for which to retain log events in the specified log group. CloudWatch Logs doesn't immediately delete log events when they reach their retention setting. It typically takes up to 72 hours after that before log events are deleted, but in rare situations might take longer. To illustrate, imagine that you change a log group to have a longer retention setting when it contains log events that are past the expiration date, but haven't been deleted. Those log events will take up to 72 hours to be deleted after the new retention date is reached. To make sure that log data is deleted permanently, keep a log group at its lower retention setting until 72 hours after the previous retention period ends. Alternatively, wait to change the retention setting until you confirm that the earlier log events are deleted. When log events reach their retention setting they are marked for deletion. After they are marked for deletion, they do not add to your archival storage costs anymore, even if they are not actually deleted until later. These log events marked for deletion are also not included when you use an API to retrieve the storedBytes value to see how many bytes a log group is storing.

```sql
REPLACE aws.logs.log_groups
SET 
logGroupName = '{{ logGroupName }}',
retentionInDays = {{ retentionInDays }}
WHERE 
region = '{{ region }}' --required
AND logGroupName = '{{ logGroupName }}' --required
AND retentionInDays = '{{ retentionInDays }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_log_group"
    values={[
        { label: 'delete_log_group', value: 'delete_log_group' }
    ]}
>
<TabItem value="delete_log_group">

Deletes the specified log group and permanently deletes all the archived log events associated with the log group.

```sql
DELETE FROM aws.logs.log_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_retention_policy"
    values={[
        { label: 'delete_retention_policy', value: 'delete_retention_policy' },
        { label: 'list_log_groups', value: 'list_log_groups' }
    ]}
>
<TabItem value="delete_retention_policy">

Deletes the specified retention policy. Log events do not expire if they belong to log groups without a retention policy.

```sql
EXEC aws.logs.log_groups.delete_retention_policy 
@region='{{ region }}' --required 
@@json=
'{
"logGroupName": "{{ logGroupName }}"
}'
;
```
</TabItem>
<TabItem value="list_log_groups">

Returns a list of log groups in the Region in your account. If you are performing this action in a monitoring account, you can choose to also return log groups from source accounts that are linked to the monitoring account. For more information about using cross-account observability to set up monitoring accounts and source accounts, see CloudWatch cross-account observability. You can optionally filter the results by log group class, log group name pattern, field indexes, data sources, field index names, or log group tags. If you specify more than one filter type, the results include log groups that satisfy all filters. This operation is paginated. By default, your first use of this operation returns 50 results, and includes a token to use in a subsequent operation to return more results.

```sql
EXEC aws.logs.log_groups.list_log_groups 
@region='{{ region }}' --required 
@@json=
'{
"logGroupNamePattern": "{{ logGroupNamePattern }}", 
"logGroupClass": "{{ logGroupClass }}", 
"includeLinkedAccounts": {{ includeLinkedAccounts }}, 
"accountIdentifiers": "{{ accountIdentifiers }}", 
"nextToken": "{{ nextToken }}", 
"limit": {{ limit }}, 
"dataSources": "{{ dataSources }}", 
"fieldIndexNames": "{{ fieldIndexNames }}", 
"logGroupTags": "{{ logGroupTags }}"
}'
;
```
</TabItem>
</Tabs>

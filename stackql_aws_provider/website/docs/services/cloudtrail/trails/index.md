--- 
title: trails
hide_title: false
hide_table_of_contents: false
keywords:
  - trails
  - cloudtrail
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

Creates, updates, deletes, gets or lists a <code>trails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.trails" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trails"
    values={[
        { label: 'describe_trails', value: 'describe_trails' }
    ]}
>
<TabItem value="describe_trails">

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
    <td><CopyableCode code="trail_list" /></td>
    <td><code>array</code></td>
    <td>The list of trail objects. Trail objects with string values are only returned if values for the objects exist in a trail's configuration. For example, SNSTopicName and SNSTopicARN are only returned in results if a trail is configured to send SNS notifications. Similarly, KMSKeyId only appears in results if a trail's log files are encrypted with KMS customer managed keys.</td>
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
    <td><a href="#describe_trails"><CopyableCode code="describe_trails" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves settings for one or more trails associated with the current Region for your account.</td>
</tr>
<tr>
    <td><a href="#create_trail"><CopyableCode code="create_trail" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-S3BucketName"><code>S3BucketName</code></a></td>
    <td></td>
    <td>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.</td>
</tr>
<tr>
    <td><a href="#update_trail"><CopyableCode code="update_trail" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. UpdateTrail must be called from the Region in which the trail was created; otherwise, an InvalidHomeRegionException is thrown.</td>
</tr>
<tr>
    <td><a href="#delete_trail"><CopyableCode code="delete_trail" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a trail. This operation must be called from the Region in which the trail was created. DeleteTrail cannot be called on the shadow trails (replicated trails in other Regions) of a trail that is enabled in all Regions. While deleting a CloudTrail trail is an irreversible action, CloudTrail does not delete log files in the Amazon S3 bucket for that trail, the Amazon S3 bucket itself, or the CloudWatchlog group to which the trail delivers events. Deleting a multi-Region trail will stop logging of events in all Amazon Web Services Regions enabled in your Amazon Web Services account. Deleting a single-Region trail will stop logging of events in that Region only. It will not stop logging of events in other Regions even if the trails in those other Regions have identical names to the deleted trail. For information about account closure and deletion of CloudTrail trails, see https:​//docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-account-closure.html.</td>
</tr>
<tr>
    <td><a href="#get_trail"><CopyableCode code="get_trail" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns settings information for a specified trail.</td>
</tr>
<tr>
    <td><a href="#list_trails"><CopyableCode code="list_trails" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists trails that are in the current account.</td>
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
    defaultValue="describe_trails"
    values={[
        { label: 'describe_trails', value: 'describe_trails' }
    ]}
>
<TabItem value="describe_trails">

Retrieves settings for one or more trails associated with the current Region for your account.

```sql
SELECT
trail_list
FROM aws.cloudtrail.trails
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trail"
    values={[
        { label: 'create_trail', value: 'create_trail' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trail">

Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.

```sql
INSERT INTO aws.cloudtrail.trails (
Name,
S3BucketName,
S3KeyPrefix,
SnsTopicName,
IncludeGlobalServiceEvents,
IsMultiRegionTrail,
EnableLogFileValidation,
CloudWatchLogsLogGroupArn,
CloudWatchLogsRoleArn,
KmsKeyId,
IsOrganizationTrail,
TagsList,
region
)
SELECT 
'{{ Name }}',
'{{ S3BucketName }}' /* required */,
'{{ S3KeyPrefix }}',
'{{ SnsTopicName }}',
{{ IncludeGlobalServiceEvents }},
{{ IsMultiRegionTrail }},
{{ EnableLogFileValidation }},
'{{ CloudWatchLogsLogGroupArn }}',
'{{ CloudWatchLogsRoleArn }}',
'{{ KmsKeyId }}',
{{ IsOrganizationTrail }},
'{{ TagsList }}',
'{{ region }}'
RETURNING
cloud_watch_logs_log_group_arn,
cloud_watch_logs_role_arn,
include_global_service_events,
is_multi_region_trail,
is_organization_trail,
kms_key_id,
log_file_validation_enabled,
name,
s3_bucket_name,
s3_key_prefix,
sns_topic_arn,
sns_topic_name,
trail_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trails
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trails resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Specifies the name of the trail. The name must meet the following requirements: Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-) Start with a letter or number, and end with a letter or number Be between 3 and 128 characters Have no adjacent periods, underscores or dashes. Names like my-_namespace and my--namespace are not valid. Not be in IP address format (for example, 192.168.5.4)
    - name: S3BucketName
      value: "{{ S3BucketName }}"
      description: |
        Specifies the name of the Amazon S3 bucket designated for publishing log files. For information about bucket naming rules, see Bucket naming rules in the Amazon Simple Storage Service User Guide.
    - name: S3KeyPrefix
      value: "{{ S3KeyPrefix }}"
      description: |
        Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.
    - name: SnsTopicName
      value: "{{ SnsTopicName }}"
      description: |
        Specifies the name or ARN of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
    - name: IncludeGlobalServiceEvents
      value: {{ IncludeGlobalServiceEvents }}
      description: |
        Specifies whether the trail is publishing events from global services such as IAM to the log files.
    - name: IsMultiRegionTrail
      value: {{ IsMultiRegionTrail }}
      description: |
        Specifies whether the trail is created in the current Region or in all Regions. The default is false, which creates a trail only in the Region where you are signed in. As a best practice, consider creating trails that log events in all Regions.
    - name: EnableLogFileValidation
      value: {{ EnableLogFileValidation }}
      description: |
        Specifies whether log file integrity validation is enabled. The default is false. When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.
    - name: CloudWatchLogsLogGroupArn
      value: "{{ CloudWatchLogsLogGroupArn }}"
      description: |
        Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. You must use a log group that exists in your account. Not required unless you specify CloudWatchLogsRoleArn.
    - name: CloudWatchLogsRoleArn
      value: "{{ CloudWatchLogsRoleArn }}"
      description: |
        Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        Specifies the KMS key ID to use to encrypt the logs and digest files delivered by CloudTrail. The value can be an alias name prefixed by alias/, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier. CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see Using multi-Region keys in the Key Management Service Developer Guide. Examples: alias/MyAliasName arn:aws:kms:us-east-2:123456789012:alias/MyAliasName arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012 12345678-1234-1234-1234-123456789012
    - name: IsOrganizationTrail
      value: {{ IsOrganizationTrail }}
      description: |
        Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account or delegated administrator account for an organization in Organizations.
    - name: TagsList
      description: |
        A list of tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_trail"
    values={[
        { label: 'update_trail', value: 'update_trail' }
    ]}
>
<TabItem value="update_trail">

Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. UpdateTrail must be called from the Region in which the trail was created; otherwise, an InvalidHomeRegionException is thrown.

```sql
UPDATE aws.cloudtrail.trails
SET 
Name = '{{ Name }}',
S3BucketName = '{{ S3BucketName }}',
S3KeyPrefix = '{{ S3KeyPrefix }}',
SnsTopicName = '{{ SnsTopicName }}',
IncludeGlobalServiceEvents = {{ IncludeGlobalServiceEvents }},
IsMultiRegionTrail = {{ IsMultiRegionTrail }},
EnableLogFileValidation = {{ EnableLogFileValidation }},
CloudWatchLogsLogGroupArn = '{{ CloudWatchLogsLogGroupArn }}',
CloudWatchLogsRoleArn = '{{ CloudWatchLogsRoleArn }}',
KmsKeyId = '{{ KmsKeyId }}',
IsOrganizationTrail = {{ IsOrganizationTrail }}
WHERE 
region = '{{ region }}' --required
RETURNING
cloud_watch_logs_log_group_arn,
cloud_watch_logs_role_arn,
include_global_service_events,
is_multi_region_trail,
is_organization_trail,
kms_key_id,
log_file_validation_enabled,
name,
s3_bucket_name,
s3_key_prefix,
sns_topic_arn,
sns_topic_name,
trail_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trail"
    values={[
        { label: 'delete_trail', value: 'delete_trail' }
    ]}
>
<TabItem value="delete_trail">

Deletes a trail. This operation must be called from the Region in which the trail was created. DeleteTrail cannot be called on the shadow trails (replicated trails in other Regions) of a trail that is enabled in all Regions. While deleting a CloudTrail trail is an irreversible action, CloudTrail does not delete log files in the Amazon S3 bucket for that trail, the Amazon S3 bucket itself, or the CloudWatchlog group to which the trail delivers events. Deleting a multi-Region trail will stop logging of events in all Amazon Web Services Regions enabled in your Amazon Web Services account. Deleting a single-Region trail will stop logging of events in that Region only. It will not stop logging of events in other Regions even if the trails in those other Regions have identical names to the deleted trail. For information about account closure and deletion of CloudTrail trails, see https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-account-closure.html.

```sql
DELETE FROM aws.cloudtrail.trails
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_trail"
    values={[
        { label: 'get_trail', value: 'get_trail' },
        { label: 'list_trails', value: 'list_trails' }
    ]}
>
<TabItem value="get_trail">

Returns settings information for a specified trail.

```sql
EXEC aws.cloudtrail.trails.get_trail 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}"
}'
;
```
</TabItem>
<TabItem value="list_trails">

Lists trails that are in the current account.

```sql
EXEC aws.cloudtrail.trails.list_trails 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>

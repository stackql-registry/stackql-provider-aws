--- 
title: investigation_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - investigation_groups
  - aiops
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

Creates, updates, deletes, gets or lists an <code>investigation_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="investigation_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.aiops.investigation_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_investigation_group"
    values={[
        { label: 'get_investigation_group', value: 'get_investigation_group' },
        { label: 'list_investigation_groups', value: 'list_investigation_groups' }
    ]}
>
<TabItem value="get_investigation_group">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the investigation group. (pattern: &lt;code&gt;&#91;\-_A-Za-z0-9\&#91;\&#93;\(\)\&#123;\&#125;\.: &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the investigation group. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):aiops:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:investigation-group\/&#91;A-Za-z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chatbotNotificationChannel" /></td>
    <td><code>object</code></td>
    <td>This structure is a string array. The first string is the ARN of a Amazon SNS topic. The array of strings display the ARNs of chat applications configurations that are associated with that topic. For more information about these configuration ARNs, see Getting started with Amazon Q in chat applications and Resource type defined by Amazon Web Services Chatbot.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date and time that the investigation group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The name of the user who created the investigation group. (pattern: &lt;code&gt;&#91;\-_\/A-Za-z0-9:\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="crossAccountConfigurations" /></td>
    <td><code>array</code></td>
    <td>Lists the AWSAccountId of the accounts configured for cross-account access and the results of the last scan performed on each account.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Use this structure to specify a customer managed KMS key to use to encrypt investigation data.</td>
</tr>
<tr>
    <td><CopyableCode code="isCloudTrailEventHistoryEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether CloudWatch investigationshas access to change events that are recorded by CloudTrail.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date and time that the investigation group was most recently modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The name of the user who created the investigation group. (pattern: &lt;code&gt;&#91;\-_\/A-Za-z0-9:\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retentionInDays" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specifies how long that investigation data is kept.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that the investigation group uses for permissions to gather data. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tagKeyBoundaries" /></td>
    <td><code>array</code></td>
    <td>Displays the custom tag keys for custom applications in your system that you have specified in the investigation group. Resource tags help CloudWatch investigations narrow the search space when it is unable to discover definite relationships between resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_investigation_groups">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the investigation group. (pattern: &lt;code&gt;&#91;\-_A-Za-z0-9\&#91;\&#93;\(\)\&#123;\&#125;\.: &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the investigation group. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):aiops:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:investigation-group\/&#91;A-Za-z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_investigation_group"><CopyableCode code="get_investigation_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the configuration information for the specified investigation group.</td>
</tr>
<tr>
    <td><a href="#list_investigation_groups"><CopyableCode code="list_investigation_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns the ARN and name of each investigation group in the account.</td>
</tr>
<tr>
    <td><a href="#create_investigation_group"><CopyableCode code="create_investigation_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates an investigation group in your account. Creating an investigation group is a one-time setup task for each Region in your account. It is a necessary task to be able to perform investigations. Settings in the investigation group help you centrally manage the common properties of your investigations, such as the following: Who can access the investigations Whether investigation data is encrypted with a customer managed Key Management Service key. How long investigations and their data are retained by default. Currently, you can have one investigation group in each Region in your account. Each investigation in a Region is a part of the investigation group in that Region To create an investigation group and set up CloudWatch investigations, you must be signed in to an IAM principal that has either the AIOpsConsoleAdminPolicy or the AdministratorAccess IAM policy attached, or to an account that has similar permissions. You can configure CloudWatch alarms to start investigations and add events to investigations. If you create your investigation group with CreateInvestigationGroup and you want to enable alarms to do this, you must use PutInvestigationGroupPolicy to create a resource policy that grants this permission to CloudWatch alarms. For more information about configuring CloudWatch alarms, see Using Amazon CloudWatch alarms</td>
</tr>
<tr>
    <td><a href="#update_investigation_group"><CopyableCode code="update_investigation_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of the specified investigation group.</td>
</tr>
<tr>
    <td><a href="#delete_investigation_group"><CopyableCode code="delete_investigation_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified investigation group from your account. You can currently have one investigation group per Region in your account. After you delete an investigation group, you can later create a new investigation group in the same Region.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>Specify either the name or the ARN of the investigation group that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Include this value, if it was returned by the previous operation, to get the next set of service operations.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_investigation_group"
    values={[
        { label: 'get_investigation_group', value: 'get_investigation_group' },
        { label: 'list_investigation_groups', value: 'list_investigation_groups' }
    ]}
>
<TabItem value="get_investigation_group">

Returns the configuration information for the specified investigation group.

```sql
SELECT
name,
arn,
chatbotNotificationChannel,
createdAt,
createdBy,
crossAccountConfigurations,
encryptionConfiguration,
isCloudTrailEventHistoryEnabled,
lastModifiedAt,
lastModifiedBy,
retentionInDays,
roleArn,
tagKeyBoundaries
FROM aws.aiops.investigation_groups
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_investigation_groups">

Returns the ARN and name of each investigation group in the account.

```sql
SELECT
name,
arn
FROM aws.aiops.investigation_groups
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_investigation_group"
    values={[
        { label: 'create_investigation_group', value: 'create_investigation_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_investigation_group">

Creates an investigation group in your account. Creating an investigation group is a one-time setup task for each Region in your account. It is a necessary task to be able to perform investigations. Settings in the investigation group help you centrally manage the common properties of your investigations, such as the following: Who can access the investigations Whether investigation data is encrypted with a customer managed Key Management Service key. How long investigations and their data are retained by default. Currently, you can have one investigation group in each Region in your account. Each investigation in a Region is a part of the investigation group in that Region To create an investigation group and set up CloudWatch investigations, you must be signed in to an IAM principal that has either the AIOpsConsoleAdminPolicy or the AdministratorAccess IAM policy attached, or to an account that has similar permissions. You can configure CloudWatch alarms to start investigations and add events to investigations. If you create your investigation group with CreateInvestigationGroup and you want to enable alarms to do this, you must use PutInvestigationGroupPolicy to create a resource policy that grants this permission to CloudWatch alarms. For more information about configuring CloudWatch alarms, see Using Amazon CloudWatch alarms

```sql
INSERT INTO aws.aiops.investigation_groups (
name,
roleArn,
encryptionConfiguration,
retentionInDays,
tags,
tagKeyBoundaries,
chatbotNotificationChannel,
isCloudTrailEventHistoryEnabled,
crossAccountConfigurations,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ encryptionConfiguration }}',
{{ retentionInDays }},
'{{ tags }}',
'{{ tagKeyBoundaries }}',
'{{ chatbotNotificationChannel }}',
{{ isCloudTrailEventHistoryEnabled }},
'{{ crossAccountConfigurations }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: investigation_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the investigation_groups resource.
    - name: name
      value: "{{ name }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: encryptionConfiguration
      description: |
        Use this structure to specify a customer managed KMS key to use to encrypt investigation data.
      value:
        type_: "{{ type_ }}"
        kmsKeyId: "{{ kmsKeyId }}"
    - name: retentionInDays
      value: {{ retentionInDays }}
    - name: tags
      value: "{{ tags }}"
    - name: tagKeyBoundaries
      value:
        - "{{ tagKeyBoundaries }}"
    - name: chatbotNotificationChannel
      value: "{{ chatbotNotificationChannel }}"
    - name: isCloudTrailEventHistoryEnabled
      value: {{ isCloudTrailEventHistoryEnabled }}
    - name: crossAccountConfigurations
      value:
        - sourceRoleArn: "{{ sourceRoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_investigation_group"
    values={[
        { label: 'update_investigation_group', value: 'update_investigation_group' }
    ]}
>
<TabItem value="update_investigation_group">

Updates the configuration of the specified investigation group.

```sql
UPDATE aws.aiops.investigation_groups
SET 
roleArn = '{{ roleArn }}',
encryptionConfiguration = '{{ encryptionConfiguration }}',
tagKeyBoundaries = '{{ tagKeyBoundaries }}',
chatbotNotificationChannel = '{{ chatbotNotificationChannel }}',
isCloudTrailEventHistoryEnabled = {{ isCloudTrailEventHistoryEnabled }},
crossAccountConfigurations = '{{ crossAccountConfigurations }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_investigation_group"
    values={[
        { label: 'delete_investigation_group', value: 'delete_investigation_group' }
    ]}
>
<TabItem value="delete_investigation_group">

Deletes the specified investigation group from your account. You can currently have one investigation group per Region in your account. After you delete an investigation group, you can later create a new investigation group in the same Region.

```sql
DELETE FROM aws.aiops.investigation_groups
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

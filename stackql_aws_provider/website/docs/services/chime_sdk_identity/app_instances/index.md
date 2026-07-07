--- 
title: app_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - app_instances
  - chime_sdk_identity
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

Creates, updates, deletes, gets or lists an <code>app_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_identity.app_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_instance"
    values={[
        { label: 'describe_app_instance', value: 'describe_app_instance' },
        { label: 'list_app_instances', value: 'list_app_instances' }
    ]}
>
<TabItem value="describe_app_instance">

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
    <td><CopyableCode code="AppInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the messaging instance. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which an AppInstance was created. In epoch milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time an AppInstance was last updated. In epoch milliseconds.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>string</code></td>
    <td>The metadata of an AppInstance. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of an AppInstance. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_instances">

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
    <td><CopyableCode code="AppInstances" /></td>
    <td><code>array</code></td>
    <td>The information for each AppInstance.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API requests until the maximum number of AppInstances is reached. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_app_instance"><CopyableCode code="describe_app_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the full details of an AppInstance.</td>
</tr>
<tr>
    <td><a href="#list_app_instances"><CopyableCode code="list_app_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all Amazon Chime AppInstances created under a single AWS account.</td>
</tr>
<tr>
    <td><a href="#create_app_instance"><CopyableCode code="create_app_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Creates an Amazon Chime SDK messaging AppInstance under an AWS account. Only SDK messaging customers use this API. CreateAppInstance supports idempotency behavior as described in the AWS API Standard. identity</td>
</tr>
<tr>
    <td><a href="#update_app_instance"><CopyableCode code="update_app_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Metadata"><code>Metadata</code></a></td>
    <td></td>
    <td>Updates AppInstance metadata.</td>
</tr>
<tr>
    <td><a href="#delete_app_instance"><CopyableCode code="delete_app_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an AppInstance and all associated data asynchronously.</td>
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
<tr id="parameter-app_instance_arn">
    <td><CopyableCode code="app_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of AppInstances that you want to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API requests until you reach the maximum number of AppInstances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_app_instance"
    values={[
        { label: 'describe_app_instance', value: 'describe_app_instance' },
        { label: 'list_app_instances', value: 'list_app_instances' }
    ]}
>
<TabItem value="describe_app_instance">

Returns the full details of an AppInstance.

```sql
SELECT
AppInstanceArn,
CreatedTimestamp,
LastUpdatedTimestamp,
Metadata,
Name
FROM aws.chime_sdk_identity.app_instances
WHERE app_instance_arn = '{{ app_instance_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_instances">

Lists all Amazon Chime AppInstances created under a single AWS account.

```sql
SELECT
AppInstances,
NextToken
FROM aws.chime_sdk_identity.app_instances
WHERE region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_instance"
    values={[
        { label: 'create_app_instance', value: 'create_app_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_instance">

Creates an Amazon Chime SDK messaging AppInstance under an AWS account. Only SDK messaging customers use this API. CreateAppInstance supports idempotency behavior as described in the AWS API Standard. identity

```sql
INSERT INTO aws.chime_sdk_identity.app_instances (
Name,
Metadata,
ClientRequestToken,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Metadata }}',
'{{ ClientRequestToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
AppInstanceArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_instances resource.
    - name: Name
      value: "{{ Name }}"
    - name: Metadata
      value: "{{ Metadata }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_instance"
    values={[
        { label: 'update_app_instance', value: 'update_app_instance' }
    ]}
>
<TabItem value="update_app_instance">

Updates AppInstance metadata.

```sql
UPDATE aws.chime_sdk_identity.app_instances
SET 
Name = '{{ Name }}',
Metadata = '{{ Metadata }}'
WHERE 
app_instance_arn = '{{ app_instance_arn }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Metadata = '{{ Metadata }}' --required
RETURNING
AppInstanceArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_instance"
    values={[
        { label: 'delete_app_instance', value: 'delete_app_instance' }
    ]}
>
<TabItem value="delete_app_instance">

Deletes an AppInstance and all associated data asynchronously.

```sql
DELETE FROM aws.chime_sdk_identity.app_instances
WHERE app_instance_arn = '{{ app_instance_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

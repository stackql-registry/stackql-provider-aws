--- 
title: quick_connects
hide_title: false
hide_table_of_contents: false
keywords:
  - quick_connects
  - connect
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

Creates, updates, deletes, gets or lists a <code>quick_connects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quick_connects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.quick_connects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_quick_connect"
    values={[
        { label: 'describe_quick_connect', value: 'describe_quick_connect' },
        { label: 'list_quick_connects', value: 'list_quick_connects' },
        { label: 'search_quick_connects', value: 'search_quick_connects' }
    ]}
>
<TabItem value="describe_quick_connect">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="QuickConnectARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="QuickConnectConfig" /></td>
    <td><code>object</code></td>
    <td>Contains configuration settings for a quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="QuickConnectId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_quick_connects">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="QuickConnectType" /></td>
    <td><code>string</code></td>
    <td>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE). (USER, QUEUE, PHONE_NUMBER, FLOW)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_quick_connects">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="QuickConnectARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="QuickConnectConfig" /></td>
    <td><code>object</code></td>
    <td>Contains configuration settings for a quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="QuickConnectId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
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
    <td><a href="#describe_quick_connect"><CopyableCode code="describe_quick_connect" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-quick_connect_id"><code>quick_connect_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the quick connect.</td>
</tr>
<tr>
    <td><a href="#list_quick_connects"><CopyableCode code="list_quick_connects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-QuickConnectTypes"><code>QuickConnectTypes</code></a></td>
    <td>Provides information about the quick connects for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#search_quick_connects"><CopyableCode code="search_quick_connects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches quick connects in an Amazon Connect instance, with optional filtering.</td>
</tr>
<tr>
    <td><a href="#create_quick_connect"><CopyableCode code="create_quick_connect" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QuickConnectConfig"><code>QuickConnectConfig</code></a></td>
    <td></td>
    <td>Creates a quick connect for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#update_quick_connect_config"><CopyableCode code="update_quick_connect_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-quick_connect_id"><code>quick_connect_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QuickConnectConfig"><code>QuickConnectConfig</code></a></td>
    <td></td>
    <td>Updates the configuration settings for the specified quick connect.</td>
</tr>
<tr>
    <td><a href="#update_quick_connect_name"><CopyableCode code="update_quick_connect_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-quick_connect_id"><code>quick_connect_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least Name or Description must be provided.</td>
</tr>
<tr>
    <td><a href="#delete_quick_connect"><CopyableCode code="delete_quick_connect" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-quick_connect_id"><code>quick_connect_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a quick connect. After calling DeleteUser, it's important to call DeleteQuickConnect to delete any records related to the deleted users. This will help you: Avoid dangling resources that impact your service quotas. Remove deleted users so they don't appear to agents as transfer options. Avoid the disruption of other Amazon Connect processes, such as instance replication and syncing if you're using Amazon Connect Global Resiliency.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-quick_connect_id">
    <td><CopyableCode code="quick_connect_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the quick connect.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-QuickConnectTypes">
    <td><CopyableCode code="QuickConnectTypes" /></td>
    <td><code>array</code></td>
    <td>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_quick_connect"
    values={[
        { label: 'describe_quick_connect', value: 'describe_quick_connect' },
        { label: 'list_quick_connects', value: 'list_quick_connects' },
        { label: 'search_quick_connects', value: 'search_quick_connects' }
    ]}
>
<TabItem value="describe_quick_connect">

Describes the quick connect.

```sql
SELECT
Description,
LastModifiedRegion,
LastModifiedTime,
Name,
QuickConnectARN,
QuickConnectConfig,
QuickConnectId,
Tags
FROM aws.connect.quick_connects
WHERE instance_id = '{{ instance_id }}' -- required
AND quick_connect_id = '{{ quick_connect_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_quick_connects">

Provides information about the quick connects for the specified Amazon Connect instance.

```sql
SELECT
Arn,
Id,
LastModifiedRegion,
LastModifiedTime,
Name,
QuickConnectType
FROM aws.connect.quick_connects
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND QuickConnectTypes = '{{ QuickConnectTypes }}'
;
```
</TabItem>
<TabItem value="search_quick_connects">

Searches quick connects in an Amazon Connect instance, with optional filtering.

```sql
SELECT
Description,
LastModifiedRegion,
LastModifiedTime,
Name,
QuickConnectARN,
QuickConnectConfig,
QuickConnectId,
Tags
FROM aws.connect.quick_connects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_quick_connect"
    values={[
        { label: 'create_quick_connect', value: 'create_quick_connect' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_quick_connect">

Creates a quick connect for the specified Amazon Connect instance.

```sql
INSERT INTO aws.connect.quick_connects (
Name,
Description,
QuickConnectConfig,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ QuickConnectConfig }}' /* required */,
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
QuickConnectARN,
QuickConnectId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: quick_connects
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the quick_connects resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the quick_connects resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: QuickConnectConfig
      description: |
        Contains configuration settings for a quick connect.
      value:
        QuickConnectType: "{{ QuickConnectType }}"
        UserConfig:
          UserId: "{{ UserId }}"
          ContactFlowId: "{{ ContactFlowId }}"
        QueueConfig:
          QueueId: "{{ QueueId }}"
          ContactFlowId: "{{ ContactFlowId }}"
        PhoneConfig:
          PhoneNumber: "{{ PhoneNumber }}"
        FlowConfig:
          ContactFlowId: "{{ ContactFlowId }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_quick_connect_config"
    values={[
        { label: 'update_quick_connect_config', value: 'update_quick_connect_config' },
        { label: 'update_quick_connect_name', value: 'update_quick_connect_name' }
    ]}
>
<TabItem value="update_quick_connect_config">

Updates the configuration settings for the specified quick connect.

```sql
UPDATE aws.connect.quick_connects
SET 
QuickConnectConfig = '{{ QuickConnectConfig }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND quick_connect_id = '{{ quick_connect_id }}' --required
AND region = '{{ region }}' --required
AND QuickConnectConfig = '{{ QuickConnectConfig }}' --required;
```
</TabItem>
<TabItem value="update_quick_connect_name">

Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least Name or Description must be provided.

```sql
UPDATE aws.connect.quick_connects
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND quick_connect_id = '{{ quick_connect_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_quick_connect"
    values={[
        { label: 'delete_quick_connect', value: 'delete_quick_connect' }
    ]}
>
<TabItem value="delete_quick_connect">

Deletes a quick connect. After calling DeleteUser, it's important to call DeleteQuickConnect to delete any records related to the deleted users. This will help you: Avoid dangling resources that impact your service quotas. Remove deleted users so they don't appear to agents as transfer options. Avoid the disruption of other Amazon Connect processes, such as instance replication and syncing if you're using Amazon Connect Global Resiliency.

```sql
DELETE FROM aws.connect.quick_connects
WHERE instance_id = '{{ instance_id }}' --required
AND quick_connect_id = '{{ quick_connect_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

--- 
title: addon_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - addon_instances
  - mailmanager
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

Creates, updates, deletes, gets or lists an <code>addon_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addon_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.addon_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_addon_instance"
    values={[
        { label: 'get_addon_instance', value: 'get_addon_instance' },
        { label: 'list_addon_instances', value: 'list_addon_instances' }
    ]}
>
<TabItem value="get_addon_instance">

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
    <td><CopyableCode code="addon_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Add On instance.</td>
</tr>
<tr>
    <td><CopyableCode code="addon_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Add On provider associated to the subscription of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="addon_subscription_id" /></td>
    <td><code>string</code></td>
    <td>The subscription ID associated to the instance. (pattern: &lt;code&gt;as-&#91;a-zA-Z0-9&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Add On instance was created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_addon_instances">

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
    <td><CopyableCode code="addon_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Add On instance.</td>
</tr>
<tr>
    <td><CopyableCode code="addon_instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Add On instance. (pattern: &lt;code&gt;ai-&#91;a-zA-Z0-9&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="addon_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Add On for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="addon_subscription_id" /></td>
    <td><code>string</code></td>
    <td>The subscription ID for the instance. (pattern: &lt;code&gt;as-&#91;a-zA-Z0-9&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Add On instance was created.</td>
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
    <td><a href="#get_addon_instance"><CopyableCode code="get_addon_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information about an Add On instance.</td>
</tr>
<tr>
    <td><a href="#list_addon_instances"><CopyableCode code="list_addon_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Add On instances in your account.</td>
</tr>
<tr>
    <td><a href="#create_addon_instance"><CopyableCode code="create_addon_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AddonSubscriptionId"><code>AddonSubscriptionId</code></a></td>
    <td></td>
    <td>Creates an Add On instance for the subscription indicated in the request. The resulting Amazon Resource Name (ARN) can be used in a conditional statement for a rule set or traffic policy.</td>
</tr>
<tr>
    <td><a href="#delete_addon_instance"><CopyableCode code="delete_addon_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Add On instance.</td>
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
    defaultValue="get_addon_instance"
    values={[
        { label: 'get_addon_instance', value: 'get_addon_instance' },
        { label: 'list_addon_instances', value: 'list_addon_instances' }
    ]}
>
<TabItem value="get_addon_instance">

Gets detailed information about an Add On instance.

```sql
SELECT
addon_instance_arn,
addon_name,
addon_subscription_id,
created_timestamp
FROM aws.mailmanager.addon_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_addon_instances">

Lists all Add On instances in your account.

```sql
SELECT
addon_instance_arn,
addon_instance_id,
addon_name,
addon_subscription_id,
created_timestamp
FROM aws.mailmanager.addon_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_addon_instance"
    values={[
        { label: 'create_addon_instance', value: 'create_addon_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_addon_instance">

Creates an Add On instance for the subscription indicated in the request. The resulting Amazon Resource Name (ARN) can be used in a conditional statement for a rule set or traffic policy.

```sql
INSERT INTO aws.mailmanager.addon_instances (
ClientToken,
AddonSubscriptionId,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ AddonSubscriptionId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
addon_instance_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: addon_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the addon_instances resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that Amazon SES uses to recognize subsequent retries of the same request.
    - name: AddonSubscriptionId
      value: "{{ AddonSubscriptionId }}"
      description: |
        The unique ID of a previously created subscription that an Add On instance is created for. You can only have one instance per subscription.
    - name: Tags
      description: |
        The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_addon_instance"
    values={[
        { label: 'delete_addon_instance', value: 'delete_addon_instance' }
    ]}
>
<TabItem value="delete_addon_instance">

Deletes an Add On instance.

```sql
DELETE FROM aws.mailmanager.addon_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

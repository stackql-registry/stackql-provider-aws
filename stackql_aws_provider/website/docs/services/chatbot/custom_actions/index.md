--- 
title: custom_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_actions
  - chatbot
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

Creates, updates, deletes, gets or lists a <code>custom_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chatbot.custom_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_action"
    values={[
        { label: 'get_custom_action', value: 'get_custom_action' },
        { label: 'list_custom_actions', value: 'list_custom_actions' }
    ]}
>
<TabItem value="get_custom_action">

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
    <td><CopyableCode code="ActionName" /></td>
    <td><code>string</code></td>
    <td>The name of the custom action that is included in the ARN. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AliasName" /></td>
    <td><code>string</code></td>
    <td>The name used to invoke this action in the chat channel. For example, @aws run my-alias. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Attachments" /></td>
    <td><code>array</code></td>
    <td>Defines when this custom action button should be attached to a notification.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomActionArn" /></td>
    <td><code>string</code></td>
    <td>The fully defined Amazon Resource Name (ARN) of the custom action. (pattern: &lt;code&gt;arn:aws:chatbot:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:custom-action/&#91;a-zA-Z0-9_-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Definition" /></td>
    <td><code>object</code></td>
    <td>The definition of the command to run when invoked as an alias or as an action button.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_actions">

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
    <td><CopyableCode code="custom_action" /></td>
    <td><code>string</code></td>
    <td>A list of custom actions.</td>
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
    <td><a href="#get_custom_action"><CopyableCode code="get_custom_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a custom action.</td>
</tr>
<tr>
    <td><a href="#list_custom_actions"><CopyableCode code="list_custom_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists custom actions defined in this account.</td>
</tr>
<tr>
    <td><a href="#create_custom_action"><CopyableCode code="create_custom_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Definition"><code>Definition</code></a>, <a href="#parameter-ActionName"><code>ActionName</code></a></td>
    <td></td>
    <td>Creates a custom action that can be invoked as an alias or as a button on a notification.</td>
</tr>
<tr>
    <td><a href="#update_custom_action"><CopyableCode code="update_custom_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomActionArn"><code>CustomActionArn</code></a>, <a href="#parameter-Definition"><code>Definition</code></a></td>
    <td></td>
    <td>Updates a custom action.</td>
</tr>
<tr>
    <td><a href="#delete_custom_action"><CopyableCode code="delete_custom_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom action.</td>
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
    defaultValue="get_custom_action"
    values={[
        { label: 'get_custom_action', value: 'get_custom_action' },
        { label: 'list_custom_actions', value: 'list_custom_actions' }
    ]}
>
<TabItem value="get_custom_action">

Returns a custom action.

```sql
SELECT
ActionName,
AliasName,
Attachments,
CustomActionArn,
Definition
FROM aws.chatbot.custom_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_actions">

Lists custom actions defined in this account.

```sql
SELECT
custom_action
FROM aws.chatbot.custom_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_action"
    values={[
        { label: 'create_custom_action', value: 'create_custom_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_action">

Creates a custom action that can be invoked as an alias or as a button on a notification.

```sql
INSERT INTO aws.chatbot.custom_actions (
Definition,
AliasName,
Attachments,
Tags,
ClientToken,
ActionName,
region
)
SELECT 
'{{ Definition }}' /* required */,
'{{ AliasName }}',
'{{ Attachments }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ ActionName }}' /* required */,
'{{ region }}'
RETURNING
CustomActionArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_actions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_actions resource.
    - name: Definition
      description: |
        The definition of the command to run when invoked as an alias or as an action button.
      value:
        CommandText: "{{ CommandText }}"
    - name: AliasName
      value: "{{ AliasName }}"
    - name: Attachments
      value:
        - NotificationType: "{{ NotificationType }}"
          ButtonText: "{{ ButtonText }}"
          Criteria: "{{ Criteria }}"
          Variables: "{{ Variables }}"
    - name: Tags
      value:
        - TagKey: "{{ TagKey }}"
          TagValue: "{{ TagValue }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: ActionName
      value: "{{ ActionName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_action"
    values={[
        { label: 'update_custom_action', value: 'update_custom_action' }
    ]}
>
<TabItem value="update_custom_action">

Updates a custom action.

```sql
UPDATE aws.chatbot.custom_actions
SET 
CustomActionArn = '{{ CustomActionArn }}',
Definition = '{{ Definition }}',
AliasName = '{{ AliasName }}',
Attachments = '{{ Attachments }}'
WHERE 
region = '{{ region }}' --required
AND CustomActionArn = '{{ CustomActionArn }}' --required
AND Definition = '{{ Definition }}' --required
RETURNING
CustomActionArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_action"
    values={[
        { label: 'delete_custom_action', value: 'delete_custom_action' }
    ]}
>
<TabItem value="delete_custom_action">

Deletes a custom action.

```sql
DELETE FROM aws.chatbot.custom_actions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

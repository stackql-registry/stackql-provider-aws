--- 
title: service_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - service_actions
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>service_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.service_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_action"
    values={[
        { label: 'describe_service_action', value: 'describe_service_action' }
    ]}
>
<TabItem value="describe_service_action">

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
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>A map that defines the self-service action.</td>
</tr>
<tr>
    <td><CopyableCode code="service_action_summary" /></td>
    <td><code>object</code></td>
    <td>Summary information about the self-service action.</td>
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
    <td><a href="#describe_service_action"><CopyableCode code="describe_service_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a self-service action.</td>
</tr>
<tr>
    <td><a href="#create_service_action"><CopyableCode code="create_service_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DefinitionType"><code>DefinitionType</code></a>, <a href="#parameter-Definition"><code>Definition</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Creates a self-service action.</td>
</tr>
<tr>
    <td><a href="#update_service_action"><CopyableCode code="update_service_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a self-service action.</td>
</tr>
<tr>
    <td><a href="#delete_service_action"><CopyableCode code="delete_service_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a self-service action.</td>
</tr>
<tr>
    <td><a href="#list_service_actions"><CopyableCode code="list_service_actions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all self-service actions.</td>
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
    defaultValue="describe_service_action"
    values={[
        { label: 'describe_service_action', value: 'describe_service_action' }
    ]}
>
<TabItem value="describe_service_action">

Describes a self-service action.

```sql
SELECT
definition,
service_action_summary
FROM aws.servicecatalog.service_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_action"
    values={[
        { label: 'create_service_action', value: 'create_service_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_action">

Creates a self-service action.

```sql
INSERT INTO aws.servicecatalog.service_actions (
Name,
DefinitionType,
Definition,
Description,
AcceptLanguage,
IdempotencyToken,
region
)
SELECT 
'{{ Name }}',
'{{ DefinitionType }}' /* required */,
'{{ Definition }}' /* required */,
'{{ Description }}',
'{{ AcceptLanguage }}',
'{{ IdempotencyToken }}' /* required */,
'{{ region }}'
RETURNING
service_action_detail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_actions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_actions resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The self-service action name.
    - name: DefinitionType
      value: "{{ DefinitionType }}"
      description: |
        The service action definition type. For example, SSM_AUTOMATION.
      valid_values: ['SSM_AUTOMATION']
    - name: Definition
      value: "{{ Definition }}"
      description: |
        The self-service action definition. Can be one of the following: Name The name of the Amazon Web Services Systems Manager document (SSM document). For example, AWS-RestartEC2Instance. If you are using a shared SSM document, you must provide the ARN instead of the name. Version The Amazon Web Services Systems Manager automation document version. For example, "Version": "1" AssumeRole The Amazon Resource Name (ARN) of the role that performs the self-service actions on your behalf. For example, "AssumeRole": "arn:aws:iam::12345678910:role/ActionRole". To reuse the provisioned product launch role, set to "AssumeRole": "LAUNCH_ROLE". Parameters The list of parameters in JSON format. For example: [{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"}] or [{\"Name\":\"InstanceId\",\"Type\":\"TEXT_VALUE\"}].
    - name: Description
      value: "{{ Description }}"
      description: |
        The self-service action description.
    - name: AcceptLanguage
      value: "{{ AcceptLanguage }}"
      description: |
        The language code. jp - Japanese zh - Chinese
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_action"
    values={[
        { label: 'update_service_action', value: 'update_service_action' }
    ]}
>
<TabItem value="update_service_action">

Updates a self-service action.

```sql
UPDATE aws.servicecatalog.service_actions
SET 
Id = '{{ Id }}',
Name = '{{ Name }}',
Definition = '{{ Definition }}',
Description = '{{ Description }}',
AcceptLanguage = '{{ AcceptLanguage }}'
WHERE 
region = '{{ region }}' --required
RETURNING
service_action_detail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_action"
    values={[
        { label: 'delete_service_action', value: 'delete_service_action' }
    ]}
>
<TabItem value="delete_service_action">

Deletes a self-service action.

```sql
DELETE FROM aws.servicecatalog.service_actions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_service_actions"
    values={[
        { label: 'list_service_actions', value: 'list_service_actions' }
    ]}
>
<TabItem value="list_service_actions">

Lists all self-service actions.

```sql
EXEC aws.servicecatalog.service_actions.list_service_actions 
@region='{{ region }}' --required 
@@json=
'{
"AcceptLanguage": "{{ AcceptLanguage }}", 
"PageSize": {{ PageSize }}, 
"PageToken": "{{ PageToken }}"
}'
;
```
</TabItem>
</Tabs>

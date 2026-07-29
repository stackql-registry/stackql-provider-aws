--- 
title: constraints
hide_title: false
hide_table_of_contents: false
keywords:
  - constraints
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

Creates, updates, deletes, gets or lists a <code>constraints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="constraints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.constraints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_constraint"
    values={[
        { label: 'describe_constraint', value: 'describe_constraint' }
    ]}
>
<TabItem value="describe_constraint">

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
    <td><CopyableCode code="constraint_detail" /></td>
    <td><code>object</code></td>
    <td>Information about the constraint.</td>
</tr>
<tr>
    <td><CopyableCode code="constraint_parameters" /></td>
    <td><code>string</code></td>
    <td>The constraint parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the current request. (AVAILABLE, CREATING, FAILED)</td>
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
    <td><a href="#describe_constraint"><CopyableCode code="describe_constraint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified constraint.</td>
</tr>
<tr>
    <td><a href="#create_constraint"><CopyableCode code="create_constraint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PortfolioId"><code>PortfolioId</code></a>, <a href="#parameter-ProductId"><code>ProductId</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Creates a constraint. A delegated admin is authorized to invoke this command.</td>
</tr>
<tr>
    <td><a href="#update_constraint"><CopyableCode code="update_constraint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Id"><code>Id</code></a></td>
    <td></td>
    <td>Updates the specified constraint.</td>
</tr>
<tr>
    <td><a href="#delete_constraint"><CopyableCode code="delete_constraint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified constraint. A delegated admin is authorized to invoke this command.</td>
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
    defaultValue="describe_constraint"
    values={[
        { label: 'describe_constraint', value: 'describe_constraint' }
    ]}
>
<TabItem value="describe_constraint">

Gets information about the specified constraint.

```sql
SELECT
constraint_detail,
constraint_parameters,
status
FROM aws.servicecatalog.constraints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_constraint"
    values={[
        { label: 'create_constraint', value: 'create_constraint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_constraint">

Creates a constraint. A delegated admin is authorized to invoke this command.

```sql
INSERT INTO aws.servicecatalog.constraints (
AcceptLanguage,
PortfolioId,
ProductId,
Parameters,
Type,
Description,
IdempotencyToken,
region
)
SELECT 
'{{ AcceptLanguage }}',
'{{ PortfolioId }}' /* required */,
'{{ ProductId }}' /* required */,
'{{ Parameters }}' /* required */,
'{{ Type }}' /* required */,
'{{ Description }}',
'{{ IdempotencyToken }}' /* required */,
'{{ region }}'
RETURNING
constraint_detail,
constraint_parameters,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: constraints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the constraints resource.
    - name: AcceptLanguage
      value: "{{ AcceptLanguage }}"
      description: |
        The language code. jp - Japanese zh - Chinese
    - name: PortfolioId
      value: "{{ PortfolioId }}"
      description: |
        The portfolio identifier.
    - name: ProductId
      value: "{{ ProductId }}"
      description: |
        The product identifier.
    - name: Parameters
      value: "{{ Parameters }}"
      description: |
        The constraint parameters, in JSON format. The syntax depends on the constraint type as follows: LAUNCH You are required to specify either the RoleArn or the LocalRoleName but can't use both. Specify the RoleArn property as follows: {"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"} Specify the LocalRoleName property as follows: {"LocalRoleName": "SCBasicLaunchRole"} If you specify the LocalRoleName property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be account-agnostic so the administrator can create fewer resources per shared account. The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint. You cannot have both a LAUNCH and a STACKSET constraint. You also cannot have more than one LAUNCH constraint on a product and portfolio. NOTIFICATION Specify the NotificationArns property as follows: {"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]} RESOURCE_UPDATE Specify the TagUpdatesOnProvisionedProduct property as follows: {"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}} The TagUpdatesOnProvisionedProduct property accepts a string value of ALLOWED or NOT_ALLOWED. STACKSET Specify the Parameters property as follows: {"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}} You cannot have both a LAUNCH and a STACKSET constraint. You also cannot have more than one STACKSET constraint on a product and portfolio. Products with a STACKSET constraint will launch an CloudFormation stack set. TEMPLATE Specify the Rules property. For more information, see Template Constraint Rules.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of constraint. LAUNCH NOTIFICATION RESOURCE_UPDATE STACKSET TEMPLATE
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the constraint.
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_constraint"
    values={[
        { label: 'update_constraint', value: 'update_constraint' }
    ]}
>
<TabItem value="update_constraint">

Updates the specified constraint.

```sql
UPDATE aws.servicecatalog.constraints
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
Id = '{{ Id }}',
Description = '{{ Description }}',
Parameters = '{{ Parameters }}'
WHERE 
region = '{{ region }}' --required
AND Id = '{{ Id }}' --required
RETURNING
constraint_detail,
constraint_parameters,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_constraint"
    values={[
        { label: 'delete_constraint', value: 'delete_constraint' }
    ]}
>
<TabItem value="delete_constraint">

Deletes the specified constraint. A delegated admin is authorized to invoke this command.

```sql
DELETE FROM aws.servicecatalog.constraints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

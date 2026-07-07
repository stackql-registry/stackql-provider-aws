--- 
title: blueprints
hide_title: false
hide_table_of_contents: false
keywords:
  - blueprints
  - glue
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

Creates, updates, deletes, gets or lists a <code>blueprints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blueprints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.blueprints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_blueprints"
    values={[
        { label: 'batch_get_blueprints', value: 'batch_get_blueprints' },
        { label: 'get_blueprint', value: 'get_blueprint' }
    ]}
>
<TabItem value="batch_get_blueprints">

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
    <td><CopyableCode code="Blueprints" /></td>
    <td><code>array</code></td>
    <td>Returns a list of blueprint as a Blueprints object.</td>
</tr>
<tr>
    <td><CopyableCode code="MissingBlueprints" /></td>
    <td><code>array</code></td>
    <td>Returns a list of BlueprintNames that were not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_blueprint">

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
    <td><CopyableCode code="BlueprintLocation" /></td>
    <td><code>string</code></td>
    <td>Specifies the path in Amazon S3 where the blueprint is published.</td>
</tr>
<tr>
    <td><CopyableCode code="BlueprintServiceLocation" /></td>
    <td><code>string</code></td>
    <td>Specifies a path in Amazon S3 where the blueprint is copied when you call CreateBlueprint/UpdateBlueprint to register the blueprint in Glue.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the blueprint was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>An error message.</td>
</tr>
<tr>
    <td><CopyableCode code="LastActiveDefinition" /></td>
    <td><code>object</code></td>
    <td>When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the blueprint was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the blueprint. (pattern: &lt;code&gt;&#91;\.\-_A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterSpec" /></td>
    <td><code>string</code></td>
    <td>A JSON string that indicates the list of parameter specifications for the blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the blueprint registration. Creating — The blueprint registration is in progress. Active — The blueprint has been successfully registered. Updating — An update to the blueprint registration is in progress. Failed — The blueprint registration failed. (CREATING, ACTIVE, UPDATING, FAILED)</td>
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
    <td><a href="#batch_get_blueprints"><CopyableCode code="batch_get_blueprints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a list of blueprints.</td>
</tr>
<tr>
    <td><a href="#get_blueprint"><CopyableCode code="get_blueprint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a blueprint.</td>
</tr>
<tr>
    <td><a href="#create_blueprint"><CopyableCode code="create_blueprint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BlueprintLocation"><code>BlueprintLocation</code></a></td>
    <td></td>
    <td>Registers a blueprint with Glue.</td>
</tr>
<tr>
    <td><a href="#update_blueprint"><CopyableCode code="update_blueprint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BlueprintLocation"><code>BlueprintLocation</code></a></td>
    <td></td>
    <td>Updates a registered blueprint.</td>
</tr>
<tr>
    <td><a href="#delete_blueprint"><CopyableCode code="delete_blueprint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing blueprint.</td>
</tr>
<tr>
    <td><a href="#list_blueprints"><CopyableCode code="list_blueprints" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the blueprint names in an account.</td>
</tr>
<tr>
    <td><a href="#start_blueprint_run"><CopyableCode code="start_blueprint_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BlueprintName"><code>BlueprintName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Starts a new run of the specified blueprint.</td>
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
    defaultValue="batch_get_blueprints"
    values={[
        { label: 'batch_get_blueprints', value: 'batch_get_blueprints' },
        { label: 'get_blueprint', value: 'get_blueprint' }
    ]}
>
<TabItem value="batch_get_blueprints">

Retrieves information about a list of blueprints.

```sql
SELECT
Blueprints,
MissingBlueprints
FROM aws.glue.blueprints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_blueprint">

Retrieves the details of a blueprint.

```sql
SELECT
BlueprintLocation,
BlueprintServiceLocation,
CreatedOn,
Description,
ErrorMessage,
LastActiveDefinition,
LastModifiedOn,
Name,
ParameterSpec,
Status
FROM aws.glue.blueprints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_blueprint"
    values={[
        { label: 'create_blueprint', value: 'create_blueprint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_blueprint">

Registers a blueprint with Glue.

```sql
INSERT INTO aws.glue.blueprints (
Name,
Description,
BlueprintLocation,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ BlueprintLocation }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: blueprints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the blueprints resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the blueprint.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the blueprint.
    - name: BlueprintLocation
      value: "{{ BlueprintLocation }}"
      description: |
        Specifies a path in Amazon S3 where the blueprint is published.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to be applied to this blueprint.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_blueprint"
    values={[
        { label: 'update_blueprint', value: 'update_blueprint' }
    ]}
>
<TabItem value="update_blueprint">

Updates a registered blueprint.

```sql
UPDATE aws.glue.blueprints
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
BlueprintLocation = '{{ BlueprintLocation }}'
WHERE 
region = '{{ region }}' --required
AND BlueprintLocation = '{{ BlueprintLocation }}' --required
RETURNING
Name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_blueprint"
    values={[
        { label: 'delete_blueprint', value: 'delete_blueprint' }
    ]}
>
<TabItem value="delete_blueprint">

Deletes an existing blueprint.

```sql
DELETE FROM aws.glue.blueprints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_blueprints"
    values={[
        { label: 'list_blueprints', value: 'list_blueprints' },
        { label: 'start_blueprint_run', value: 'start_blueprint_run' }
    ]}
>
<TabItem value="list_blueprints">

Lists all the blueprint names in an account.

```sql
EXEC aws.glue.blueprints.list_blueprints 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="start_blueprint_run">

Starts a new run of the specified blueprint.

```sql
EXEC aws.glue.blueprints.start_blueprint_run 
@region='{{ region }}' --required 
@@json=
'{
"BlueprintName": "{{ BlueprintName }}", 
"Parameters": "{{ Parameters }}", 
"RoleArn": "{{ RoleArn }}"
}'
;
```
</TabItem>
</Tabs>

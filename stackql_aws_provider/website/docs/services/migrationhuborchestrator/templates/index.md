--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - migrationhuborchestrator
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhuborchestrator.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="get_template">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the template was last created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The time at which the template was last created.</td>
</tr>
<tr>
    <td><CopyableCode code="inputs" /></td>
    <td><code>array</code></td>
    <td>The inputs provided for the creation of the migration workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the migration workflow template.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the template. (CREATED, READY, PENDING_CREATION, CREATING, CREATION_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message of retrieving migration workflow templates.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags added to the migration workflow template.</td>
</tr>
<tr>
    <td><CopyableCode code="templateArn" /></td>
    <td><code>string</code></td>
    <td>&gt;The Amazon Resource Name (ARN) of the migration workflow template. The format for an Migration Hub Orchestrator template ARN is arn:aws:migrationhub-orchestrator:region:account:template/template-abcd1234. For more information about ARNs, see Amazon Resource Names (ARNs) in the AWS General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="templateClass" /></td>
    <td><code>string</code></td>
    <td>The class of the migration workflow template. The available template classes are: A2C MGN SAP_MULTI SQL_EC2 SQL_RDS VMIE</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>List of AWS services utilized in a migration workflow.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_templates">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the template.</td>
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
    <td><a href="#get_template"><CopyableCode code="get_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the template you want to use for creating a migration workflow.</td>
</tr>
<tr>
    <td><a href="#list_templates"><CopyableCode code="list_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>List the templates available in Migration Hub Orchestrator to create a migration workflow.</td>
</tr>
<tr>
    <td><a href="#create_template"><CopyableCode code="create_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-templateName"><code>templateName</code></a>, <a href="#parameter-templateSource"><code>templateSource</code></a></td>
    <td></td>
    <td>Creates a migration workflow template.</td>
</tr>
<tr>
    <td><a href="#update_template"><CopyableCode code="update_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a migration workflow template.</td>
</tr>
<tr>
    <td><a href="#delete_template"><CopyableCode code="delete_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a migration workflow template.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the request to delete a migration workflow template.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that can be returned.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the template.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="get_template">

Get the template you want to use for creating a migration workflow.

```sql
SELECT
id,
name,
creationTime,
description,
inputs,
owner,
status,
statusMessage,
tags,
templateArn,
templateClass,
tools
FROM aws.migrationhuborchestrator.templates
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_templates">

List the templates available in Migration Hub Orchestrator to create a migration workflow.

```sql
SELECT
id,
name,
arn,
description
FROM aws.migrationhuborchestrator.templates
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_template"
    values={[
        { label: 'create_template', value: 'create_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template">

Creates a migration workflow template.

```sql
INSERT INTO aws.migrationhuborchestrator.templates (
templateName,
templateDescription,
templateSource,
clientToken,
tags,
region
)
SELECT 
'{{ templateName }}' /* required */,
'{{ templateDescription }}',
'{{ templateSource }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
tags,
templateArn,
templateId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the templates resource.
    - name: templateName
      value: "{{ templateName }}"
    - name: templateDescription
      value: "{{ templateDescription }}"
    - name: templateSource
      description: |
        The migration workflow template used as the source for the new template.
      value:
        workflowId: "{{ workflowId }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_template"
    values={[
        { label: 'update_template', value: 'update_template' }
    ]}
>
<TabItem value="update_template">

Updates a migration workflow template.

```sql
UPDATE aws.migrationhuborchestrator.templates
SET 
templateName = '{{ templateName }}',
templateDescription = '{{ templateDescription }}',
clientToken = '{{ clientToken }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
tags,
templateArn,
templateId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_template"
    values={[
        { label: 'delete_template', value: 'delete_template' }
    ]}
>
<TabItem value="delete_template">

Deletes a migration workflow template.

```sql
DELETE FROM aws.migrationhuborchestrator.templates
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

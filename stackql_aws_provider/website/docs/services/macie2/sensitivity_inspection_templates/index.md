--- 
title: sensitivity_inspection_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - sensitivity_inspection_templates
  - macie2
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

Creates, updates, deletes, gets or lists a <code>sensitivity_inspection_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sensitivity_inspection_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.sensitivity_inspection_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sensitivity_inspection_template"
    values={[
        { label: 'get_sensitivity_inspection_template', value: 'get_sensitivity_inspection_template' },
        { label: 'list_sensitivity_inspection_templates', value: 'list_sensitivity_inspection_templates' }
    ]}
>
<TabItem value="get_sensitivity_inspection_template">

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
    <td>The name of the template: automated-sensitive-data-discovery.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="excludes" /></td>
    <td><code>object</code></td>
    <td>The managed data identifiers that are explicitly excluded (not used) when performing automated sensitive data discovery.</td>
</tr>
<tr>
    <td><CopyableCode code="includes" /></td>
    <td><code>object</code></td>
    <td>The allow lists, custom data identifiers, and managed data identifiers that are explicitly included (used) when performing automated sensitive data discovery.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitivityInspectionTemplateId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the template.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sensitivity_inspection_templates">

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
    <td>The unique identifier for the sensitivity inspection template.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the sensitivity inspection template: automated-sensitive-data-discovery.</td>
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
    <td><a href="#get_sensitivity_inspection_template"><CopyableCode code="get_sensitivity_inspection_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the settings for the sensitivity inspection template for an account.</td>
</tr>
<tr>
    <td><a href="#list_sensitivity_inspection_templates"><CopyableCode code="list_sensitivity_inspection_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a subset of information about the sensitivity inspection template for an account.</td>
</tr>
<tr>
    <td><a href="#update_sensitivity_inspection_template"><CopyableCode code="update_sensitivity_inspection_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the settings for the sensitivity inspection template for an account.</td>
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
    <td>The unique identifier for the Amazon Macie resource that the request applies to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to include in each page of a paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sensitivity_inspection_template"
    values={[
        { label: 'get_sensitivity_inspection_template', value: 'get_sensitivity_inspection_template' },
        { label: 'list_sensitivity_inspection_templates', value: 'list_sensitivity_inspection_templates' }
    ]}
>
<TabItem value="get_sensitivity_inspection_template">

Retrieves the settings for the sensitivity inspection template for an account.

```sql
SELECT
name,
description,
excludes,
includes,
sensitivityInspectionTemplateId
FROM aws.macie2.sensitivity_inspection_templates
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sensitivity_inspection_templates">

Retrieves a subset of information about the sensitivity inspection template for an account.

```sql
SELECT
id,
name
FROM aws.macie2.sensitivity_inspection_templates
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sensitivity_inspection_template"
    values={[
        { label: 'update_sensitivity_inspection_template', value: 'update_sensitivity_inspection_template' }
    ]}
>
<TabItem value="update_sensitivity_inspection_template">

Updates the settings for the sensitivity inspection template for an account.

```sql
UPDATE aws.macie2.sensitivity_inspection_templates
SET 
description = '{{ description }}',
excludes = '{{ excludes }}',
includes = '{{ includes }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>

--- 
title: documentation_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - documentation_versions
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>documentation_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="documentation_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.documentation_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_documentation_version"
    values={[
        { label: 'get_documentation_version', value: 'get_documentation_version' },
        { label: 'get_documentation_versions', value: 'get_documentation_versions' }
    ]}
>
<TabItem value="get_documentation_version">

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
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the API documentation snapshot is created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the API documentation snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the API documentation snapshot.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_documentation_versions">

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
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the API documentation snapshot is created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the API documentation snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the API documentation snapshot.</td>
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
    <td><a href="#get_documentation_version"><CopyableCode code="get_documentation_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-doc_version"><code>doc_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a documentation version.</td>
</tr>
<tr>
    <td><a href="#get_documentation_versions"><CopyableCode code="get_documentation_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Gets documentation versions.</td>
</tr>
<tr>
    <td><a href="#create_documentation_version"><CopyableCode code="create_documentation_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-documentationVersion"><code>documentationVersion</code></a></td>
    <td></td>
    <td>Creates a documentation version</td>
</tr>
<tr>
    <td><a href="#update_documentation_version"><CopyableCode code="update_documentation_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-doc_version"><code>doc_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a documentation version.</td>
</tr>
<tr>
    <td><a href="#delete_documentation_version"><CopyableCode code="delete_documentation_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-doc_version"><code>doc_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a documentation version.</td>
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
<tr id="parameter-doc_version">
    <td><CopyableCode code="doc_version" /></td>
    <td><code>string</code></td>
    <td>The version identifier of a to-be-deleted documentation snapshot.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_documentation_version"
    values={[
        { label: 'get_documentation_version', value: 'get_documentation_version' },
        { label: 'get_documentation_versions', value: 'get_documentation_versions' }
    ]}
>
<TabItem value="get_documentation_version">

Gets a documentation version.

```sql
SELECT
created_date,
description,
version
FROM aws.apigateway.documentation_versions
WHERE restapi_id = '{{ restapi_id }}' -- required
AND doc_version = '{{ doc_version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_documentation_versions">

Gets documentation versions.

```sql
SELECT
created_date,
description,
version
FROM aws.apigateway.documentation_versions
WHERE restapi_id = '{{ restapi_id }}' -- required
AND region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_documentation_version"
    values={[
        { label: 'create_documentation_version', value: 'create_documentation_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_documentation_version">

Creates a documentation version

```sql
INSERT INTO aws.apigateway.documentation_versions (
documentationVersion,
stageName,
description,
restapi_id,
region
)
SELECT 
'{{ documentationVersion }}' /* required */,
'{{ stageName }}',
'{{ description }}',
'{{ restapi_id }}',
'{{ region }}'
RETURNING
created_date,
description,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: documentation_versions
  props:
    - name: restapi_id
      value: "{{ restapi_id }}"
      description: Required parameter for the documentation_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the documentation_versions resource.
    - name: documentationVersion
      value: "{{ documentationVersion }}"
    - name: stageName
      value: "{{ stageName }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_documentation_version"
    values={[
        { label: 'update_documentation_version', value: 'update_documentation_version' }
    ]}
>
<TabItem value="update_documentation_version">

Updates a documentation version.

```sql
UPDATE aws.apigateway.documentation_versions
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND doc_version = '{{ doc_version }}' --required
AND region = '{{ region }}' --required
RETURNING
created_date,
description,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_documentation_version"
    values={[
        { label: 'delete_documentation_version', value: 'delete_documentation_version' }
    ]}
>
<TabItem value="delete_documentation_version">

Deletes a documentation version.

```sql
DELETE FROM aws.apigateway.documentation_versions
WHERE restapi_id = '{{ restapi_id }}' --required
AND doc_version = '{{ doc_version }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

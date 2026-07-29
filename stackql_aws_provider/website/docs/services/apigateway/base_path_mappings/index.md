--- 
title: base_path_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - base_path_mappings
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

Creates, updates, deletes, gets or lists a <code>base_path_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="base_path_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.base_path_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_base_path_mapping"
    values={[
        { label: 'get_base_path_mapping', value: 'get_base_path_mapping' },
        { label: 'get_base_path_mappings', value: 'get_base_path_mappings' }
    ]}
>
<TabItem value="get_base_path_mapping">

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
    <td><CopyableCode code="base_path" /></td>
    <td><code>string</code></td>
    <td>The base path name that callers of the API must provide as part of the URL after the domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="rest_api_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The name of the associated stage.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_base_path_mappings">

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
    <td><CopyableCode code="base_path" /></td>
    <td><code>string</code></td>
    <td>The base path name that callers of the API must provide as part of the URL after the domain name.</td>
</tr>
<tr>
    <td><CopyableCode code="rest_api_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The name of the associated stage.</td>
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
    <td><a href="#get_base_path_mapping"><CopyableCode code="get_base_path_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-base_path"><code>base_path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Describe a BasePathMapping resource.</td>
</tr>
<tr>
    <td><a href="#get_base_path_mappings"><CopyableCode code="get_base_path_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a>, <a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Represents a collection of BasePathMapping resources.</td>
</tr>
<tr>
    <td><a href="#create_base_path_mapping"><CopyableCode code="create_base_path_mapping" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-restApiId"><code>restApiId</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Creates a new BasePathMapping resource.</td>
</tr>
<tr>
    <td><a href="#update_base_path_mapping"><CopyableCode code="update_base_path_mapping" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-base_path"><code>base_path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Changes information about the BasePathMapping resource.</td>
</tr>
<tr>
    <td><a href="#delete_base_path_mapping"><CopyableCode code="delete_base_path_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-base_path"><code>base_path</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainNameId"><code>domainNameId</code></a></td>
    <td>Deletes the BasePathMapping resource.</td>
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
<tr id="parameter-base_path">
    <td><CopyableCode code="base_path" /></td>
    <td><code>string</code></td>
    <td>The base path name of the BasePathMapping resource to delete. To specify an empty base path, set this parameter to '(none)'.</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name of the BasePathMapping resource to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domainNameId">
    <td><CopyableCode code="domainNameId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the domain name resource. Supported only for private custom domain names.</td>
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
    defaultValue="get_base_path_mapping"
    values={[
        { label: 'get_base_path_mapping', value: 'get_base_path_mapping' },
        { label: 'get_base_path_mappings', value: 'get_base_path_mappings' }
    ]}
>
<TabItem value="get_base_path_mapping">

Describe a BasePathMapping resource.

```sql
SELECT
base_path,
rest_api_id,
stage
FROM aws.apigateway.base_path_mappings
WHERE domain_name = '{{ domain_name }}' -- required
AND base_path = '{{ base_path }}' -- required
AND region = '{{ region }}' -- required
AND domainNameId = '{{ domainNameId }}'
;
```
</TabItem>
<TabItem value="get_base_path_mappings">

Represents a collection of BasePathMapping resources.

```sql
SELECT
base_path,
rest_api_id,
stage
FROM aws.apigateway.base_path_mappings
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND domainNameId = '{{ domainNameId }}'
AND position = '{{ position }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_base_path_mapping"
    values={[
        { label: 'create_base_path_mapping', value: 'create_base_path_mapping' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_base_path_mapping">

Creates a new BasePathMapping resource.

```sql
INSERT INTO aws.apigateway.base_path_mappings (
basePath,
restApiId,
stage,
domain_name,
region,
domainNameId
)
SELECT 
'{{ basePath }}',
'{{ restApiId }}' /* required */,
'{{ stage }}',
'{{ domain_name }}',
'{{ region }}',
'{{ domainNameId }}'
RETURNING
base_path,
rest_api_id,
stage
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: base_path_mappings
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the base_path_mappings resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the base_path_mappings resource.
    - name: basePath
      value: "{{ basePath }}"
    - name: restApiId
      value: "{{ restApiId }}"
    - name: stage
      value: "{{ stage }}"
    - name: domainNameId
      value: "{{ domainNameId }}"
      description: The identifier for the domain name resource. Required for private custom domain names.
      description: The identifier for the domain name resource. Required for private custom domain names.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_base_path_mapping"
    values={[
        { label: 'update_base_path_mapping', value: 'update_base_path_mapping' }
    ]}
>
<TabItem value="update_base_path_mapping">

Changes information about the BasePathMapping resource.

```sql
UPDATE aws.apigateway.base_path_mappings
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND base_path = '{{ base_path }}' --required
AND region = '{{ region }}' --required
AND domainNameId = '{{ domainNameId}}'
RETURNING
base_path,
rest_api_id,
stage;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_base_path_mapping"
    values={[
        { label: 'delete_base_path_mapping', value: 'delete_base_path_mapping' }
    ]}
>
<TabItem value="delete_base_path_mapping">

Deletes the BasePathMapping resource.

```sql
DELETE FROM aws.apigateway.base_path_mappings
WHERE domain_name = '{{ domain_name }}' --required
AND base_path = '{{ base_path }}' --required
AND region = '{{ region }}' --required
AND domainNameId = '{{ domainNameId }}'
;
```
</TabItem>
</Tabs>

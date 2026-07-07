--- 
title: recommender_schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - recommender_schemas
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>recommender_schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommender_schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.recommender_schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommender_schema"
    values={[
        { label: 'get_recommender_schema', value: 'get_recommender_schema' },
        { label: 'list_recommender_schemas', value: 'list_recommender_schemas' }
    ]}
>
<TabItem value="get_recommender_schema">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the recommender schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Fields" /></td>
    <td><code>object</code></td>
    <td>A map of dataset type to column definitions included in the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="RecommenderSchemaName" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender schema. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the recommender schema. (ACTIVE, DELETING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recommender_schemas">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommender schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Fields" /></td>
    <td><code>object</code></td>
    <td>A map of dataset type to column definitions included in the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="RecommenderSchemaName" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender schema. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current operational status of the recommender schema. (ACTIVE, DELETING)</td>
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
    <td><a href="#get_recommender_schema"><CopyableCode code="get_recommender_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_schema_name"><code>recommender_schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific recommender schema in a domain.</td>
</tr>
<tr>
    <td><a href="#list_recommender_schemas"><CopyableCode code="list_recommender_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of recommender schemas in the specified domain.</td>
</tr>
<tr>
    <td><a href="#create_recommender_schema"><CopyableCode code="create_recommender_schema" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_schema_name"><code>recommender_schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a recommender schema. A recommender schema defines the set of data columns available for training recommenders and filters under a domain.</td>
</tr>
<tr>
    <td><a href="#delete_recommender_schema"><CopyableCode code="delete_recommender_schema" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_schema_name"><code>recommender_schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a recommender schema from a domain.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-recommender_schema_name">
    <td><CopyableCode code="recommender_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender schema to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of recommender schemas to return in the response. The default value is 100.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A token received from a previous ListRecommenderSchemas call to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recommender_schema"
    values={[
        { label: 'get_recommender_schema', value: 'get_recommender_schema' },
        { label: 'list_recommender_schemas', value: 'list_recommender_schemas' }
    ]}
>
<TabItem value="get_recommender_schema">

Retrieves information about a specific recommender schema in a domain.

```sql
SELECT
CreatedAt,
Fields,
RecommenderSchemaName,
Status
FROM aws.customer_profiles.recommender_schemas
WHERE domain_name = '{{ domain_name }}' -- required
AND recommender_schema_name = '{{ recommender_schema_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recommender_schemas">

Returns a list of recommender schemas in the specified domain.

```sql
SELECT
CreatedAt,
Fields,
RecommenderSchemaName,
Status
FROM aws.customer_profiles.recommender_schemas
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_recommender_schema"
    values={[
        { label: 'create_recommender_schema', value: 'create_recommender_schema' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recommender_schema">

Creates a recommender schema. A recommender schema defines the set of data columns available for training recommenders and filters under a domain.

```sql
INSERT INTO aws.customer_profiles.recommender_schemas (
Fields,
Tags,
domain_name,
recommender_schema_name,
region
)
SELECT 
'{{ Fields }}',
'{{ Tags }}',
'{{ domain_name }}',
'{{ recommender_schema_name }}',
'{{ region }}'
RETURNING
CreatedAt,
Fields,
RecommenderSchemaArn,
RecommenderSchemaName,
Status,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recommender_schemas
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the recommender_schemas resource.
    - name: recommender_schema_name
      value: "{{ recommender_schema_name }}"
      description: Required parameter for the recommender_schemas resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recommender_schemas resource.
    - name: Fields
      value: "{{ Fields }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recommender_schema"
    values={[
        { label: 'delete_recommender_schema', value: 'delete_recommender_schema' }
    ]}
>
<TabItem value="delete_recommender_schema">

Deletes a recommender schema from a domain.

```sql
DELETE FROM aws.customer_profiles.recommender_schemas
WHERE domain_name = '{{ domain_name }}' --required
AND recommender_schema_name = '{{ recommender_schema_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

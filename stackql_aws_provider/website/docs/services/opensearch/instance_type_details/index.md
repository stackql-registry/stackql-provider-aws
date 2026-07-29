--- 
title: instance_type_details
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_type_details
  - opensearch
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

Creates, updates, deletes, gets or lists an <code>instance_type_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_type_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.instance_type_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_instance_type_details"
    values={[
        { label: 'list_instance_type_details', value: 'list_instance_type_details' }
    ]}
>
<TabItem value="list_instance_type_details">

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
    <td><CopyableCode code="instance_type_details" /></td>
    <td><code>array</code></td>
    <td>Lists all supported instance types and features for the given OpenSearch or Elasticsearch version.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
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
    <td><a href="#list_instance_type_details"><CopyableCode code="list_instance_type_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-engine_version"><code>engine_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-retrieveAZs"><code>retrieveAZs</code></a>, <a href="#parameter-instanceType"><code>instanceType</code></a></td>
    <td>Lists all instance types and available features for a given OpenSearch or Elasticsearch version.</td>
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
<tr id="parameter-engine_version">
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y. Defaults to the latest version of OpenSearch.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domainName">
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The name of the domain.</td>
</tr>
<tr id="parameter-instanceType">
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that lists information for a given instance type.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If your initial ListInstanceTypeDetails operation returns a nextToken, you can include the returned nextToken in subsequent ListInstanceTypeDetails operations, which returns results in the next page.</td>
</tr>
<tr id="parameter-retrieveAZs">
    <td><CopyableCode code="retrieveAZs" /></td>
    <td><code>boolean</code></td>
    <td>An optional parameter that specifies the Availability Zones for the domain.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_instance_type_details"
    values={[
        { label: 'list_instance_type_details', value: 'list_instance_type_details' }
    ]}
>
<TabItem value="list_instance_type_details">

Lists all instance types and available features for a given OpenSearch or Elasticsearch version.

```sql
SELECT
instance_type_details,
next_token
FROM aws.opensearch.instance_type_details
WHERE engine_version = '{{ engine_version }}' -- required
AND region = '{{ region }}' -- required
AND domainName = '{{ domainName }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND retrieveAZs = '{{ retrieveAZs }}'
AND instanceType = '{{ instanceType }}'
;
```
</TabItem>
</Tabs>

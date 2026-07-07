--- 
title: elasticsearch_instance_types
hide_title: false
hide_table_of_contents: false
keywords:
  - elasticsearch_instance_types
  - es
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

Creates, updates, deletes, gets or lists an <code>elasticsearch_instance_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="elasticsearch_instance_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.elasticsearch_instance_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_elasticsearch_instance_types"
    values={[
        { label: 'list_elasticsearch_instance_types', value: 'list_elasticsearch_instance_types' }
    ]}
>
<TabItem value="list_elasticsearch_instance_types">

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
    <td><CopyableCode code="elasticsearch_instance_type" /></td>
    <td><code>string</code></td>
    <td>List of instance types supported by Amazon Elasticsearch service for given ElasticsearchVersion</td>
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
    <td><a href="#list_elasticsearch_instance_types"><CopyableCode code="list_elasticsearch_instance_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-elasticsearch_version"><code>elasticsearch_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</td>
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
<tr id="parameter-elasticsearch_version">
    <td><CopyableCode code="elasticsearch_version" /></td>
    <td><code>string</code></td>
    <td>Version of Elasticsearch for which list of supported elasticsearch instance types are needed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domainName">
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_elasticsearch_instance_types"
    values={[
        { label: 'list_elasticsearch_instance_types', value: 'list_elasticsearch_instance_types' }
    ]}
>
<TabItem value="list_elasticsearch_instance_types">

List all Elasticsearch instance types that are supported for given ElasticsearchVersion

```sql
SELECT
elasticsearch_instance_type
FROM aws.es.elasticsearch_instance_types
WHERE elasticsearch_version = '{{ elasticsearch_version }}' -- required
AND region = '{{ region }}' -- required
AND domainName = '{{ domainName }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>

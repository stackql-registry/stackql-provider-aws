--- 
title: elasticsearch_instance_type_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - elasticsearch_instance_type_limits
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

Creates, updates, deletes, gets or lists an <code>elasticsearch_instance_type_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="elasticsearch_instance_type_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.elasticsearch_instance_type_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_elasticsearch_instance_type_limits"
    values={[
        { label: 'describe_elasticsearch_instance_type_limits', value: 'describe_elasticsearch_instance_type_limits' }
    ]}
>
<TabItem value="describe_elasticsearch_instance_type_limits">

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
    <td><CopyableCode code="LimitsByRole" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#describe_elasticsearch_instance_type_limits"><CopyableCode code="describe_elasticsearch_instance_type_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_type"><code>instance_type</code></a>, <a href="#parameter-elasticsearch_version"><code>elasticsearch_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a></td>
    <td>Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the DomainName to know what Limits are supported for modifying.</td>
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
    <td>Version of Elasticsearch for which Limits are needed.</td>
</tr>
<tr id="parameter-instance_type">
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type for an Elasticsearch cluster for which Elasticsearch Limits are needed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domainName">
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch Limits for existing domain.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_elasticsearch_instance_type_limits"
    values={[
        { label: 'describe_elasticsearch_instance_type_limits', value: 'describe_elasticsearch_instance_type_limits' }
    ]}
>
<TabItem value="describe_elasticsearch_instance_type_limits">

Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the DomainName to know what Limits are supported for modifying.

```sql
SELECT
LimitsByRole
FROM aws.es.elasticsearch_instance_type_limits
WHERE instance_type = '{{ instance_type }}' -- required
AND elasticsearch_version = '{{ elasticsearch_version }}' -- required
AND region = '{{ region }}' -- required
AND domainName = '{{ domainName }}'
;
```
</TabItem>
</Tabs>

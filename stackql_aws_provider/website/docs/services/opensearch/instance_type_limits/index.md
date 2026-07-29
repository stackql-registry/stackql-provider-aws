--- 
title: instance_type_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_type_limits
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

Creates, updates, deletes, gets or lists an <code>instance_type_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_type_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.instance_type_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_type_limits"
    values={[
        { label: 'describe_instance_type_limits', value: 'describe_instance_type_limits' }
    ]}
>
<TabItem value="describe_instance_type_limits">

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
    <td><CopyableCode code="limits_by_role" /></td>
    <td><code>object</code></td>
    <td>Map that contains all applicable instance type limits.data refers to data nodes.master refers to dedicated master nodes.</td>
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
    <td><a href="#describe_instance_type_limits"><CopyableCode code="describe_instance_type_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_type"><code>instance_type</code></a>, <a href="#parameter-engine_version"><code>engine_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a></td>
    <td>Describes the instance count, storage, and master node limits for a given OpenSearch or Elasticsearch version and instance type.</td>
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
    <td>Version of OpenSearch or Elasticsearch, in the format Elasticsearch_X.Y or OpenSearch_X.Y. Defaults to the latest version of OpenSearch.</td>
</tr>
<tr id="parameter-instance_type">
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The OpenSearch Service instance type for which you need limit information.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domainName">
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The name of the domain. Only specify if you need the limits for an existing domain.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_type_limits"
    values={[
        { label: 'describe_instance_type_limits', value: 'describe_instance_type_limits' }
    ]}
>
<TabItem value="describe_instance_type_limits">

Describes the instance count, storage, and master node limits for a given OpenSearch or Elasticsearch version and instance type.

```sql
SELECT
limits_by_role
FROM aws.opensearch.instance_type_limits
WHERE instance_type = '{{ instance_type }}' -- required
AND engine_version = '{{ engine_version }}' -- required
AND region = '{{ region }}' -- required
AND domainName = '{{ domainName }}'
;
```
</TabItem>
</Tabs>

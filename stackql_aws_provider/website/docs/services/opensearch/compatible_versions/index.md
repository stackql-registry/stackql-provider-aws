--- 
title: compatible_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - compatible_versions
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

Creates, updates, deletes, gets or lists a <code>compatible_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compatible_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.compatible_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_compatible_versions"
    values={[
        { label: 'get_compatible_versions', value: 'get_compatible_versions' }
    ]}
>
<TabItem value="get_compatible_versions">

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
    <td><CopyableCode code="compatible_versions" /></td>
    <td><code>array</code></td>
    <td>A map of OpenSearch or Elasticsearch versions and the versions you can upgrade them to.</td>
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
    <td><a href="#get_compatible_versions"><CopyableCode code="get_compatible_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a></td>
    <td>Returns a map of OpenSearch or Elasticsearch versions and the versions you can upgrade them to.</td>
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
<tr id="parameter-domainName">
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The name of an existing domain. Provide this parameter to limit the results to a single domain.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_compatible_versions"
    values={[
        { label: 'get_compatible_versions', value: 'get_compatible_versions' }
    ]}
>
<TabItem value="get_compatible_versions">

Returns a map of OpenSearch or Elasticsearch versions and the versions you can upgrade them to.

```sql
SELECT
compatible_versions
FROM aws.opensearch.compatible_versions
WHERE region = '{{ region }}' -- required
AND domainName = '{{ domainName }}'
;
```
</TabItem>
</Tabs>

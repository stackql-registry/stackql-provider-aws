--- 
title: data_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sets
  - m2
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

Creates, updates, deletes, gets or lists a <code>data_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.data_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_sets"
    values={[
        { label: 'list_data_sets', value: 'list_data_sets' }
    ]}
>
<TabItem value="list_data_sets">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data set was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the data set. (pattern: &lt;code&gt;^\S&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_set_org" /></td>
    <td><code>string</code></td>
    <td>The type of data set. The only supported value is VSAM. (pattern: &lt;code&gt;^\S&#123;1,20&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format of the data set. (pattern: &lt;code&gt;^\S&#123;1,20&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_referenced_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the data set was referenced.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the data set was updated.</td>
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
    <td><a href="#list_data_sets"><CopyableCode code="list_data_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nameFilter"><code>nameFilter</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-prefix"><code>prefix</code></a></td>
    <td>Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using CreateDataSetImportTask.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application for which you want to list the associated data sets.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects to return.</td>
</tr>
<tr id="parameter-nameFilter">
    <td><CopyableCode code="nameFilter" /></td>
    <td><code>string</code></td>
    <td>Filter dataset name matching the specified pattern. Can use * and % as wild cards.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix of the data set name, which you can use to filter the list of data sets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_data_sets"
    values={[
        { label: 'list_data_sets', value: 'list_data_sets' }
    ]}
>
<TabItem value="list_data_sets">

Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using CreateDataSetImportTask.

```sql
SELECT
creation_time,
data_set_name,
data_set_org,
format_,
last_referenced_time,
last_updated_time
FROM aws.m2.data_sets
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nameFilter = '{{ nameFilter }}'
AND nextToken = '{{ nextToken }}'
AND prefix = '{{ prefix }}'
;
```
</TabItem>
</Tabs>

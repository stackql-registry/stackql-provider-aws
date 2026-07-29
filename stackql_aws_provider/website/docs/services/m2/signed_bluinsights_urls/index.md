--- 
title: signed_bluinsights_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - signed_bluinsights_urls
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

Creates, updates, deletes, gets or lists a <code>signed_bluinsights_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signed_bluinsights_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.signed_bluinsights_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_signed_bluinsights_url"
    values={[
        { label: 'get_signed_bluinsights_url', value: 'get_signed_bluinsights_url' }
    ]}
>
<TabItem value="get_signed_bluinsights_url">

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
    <td><CopyableCode code="signed_bi_url" /></td>
    <td><code>string</code></td>
    <td>Single sign-on AWS Blu Insights URL.</td>
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
    <td><a href="#get_signed_bluinsights_url"><CopyableCode code="get_signed_bluinsights_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a single sign-on URL that can be used to connect to AWS Blu Insights.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_signed_bluinsights_url"
    values={[
        { label: 'get_signed_bluinsights_url', value: 'get_signed_bluinsights_url' }
    ]}
>
<TabItem value="get_signed_bluinsights_url">

Gets a single sign-on URL that can be used to connect to AWS Blu Insights.

```sql
SELECT
signed_bi_url
FROM aws.m2.signed_bluinsights_urls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

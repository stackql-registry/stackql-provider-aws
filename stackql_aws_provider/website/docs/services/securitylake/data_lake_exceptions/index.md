--- 
title: data_lake_exceptions
hide_title: false
hide_table_of_contents: false
keywords:
  - data_lake_exceptions
  - securitylake
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

Creates, updates, deletes, gets or lists a <code>data_lake_exceptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_lake_exceptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securitylake.data_lake_exceptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_lake_exceptions"
    values={[
        { label: 'list_data_lake_exceptions', value: 'list_data_lake_exceptions' }
    ]}
>
<TabItem value="list_data_lake_exceptions">

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
    <td><CopyableCode code="exception" /></td>
    <td><code>string</code></td>
    <td>The underlying exception of a Security Lake exception. (pattern: &lt;code&gt;^&#91;\\\w\-_:/.@=+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Regions where the exception occurred. (pattern: &lt;code&gt;^(us(-gov)?|af|ap|ca|eu|me|sa)-(central|north|(north(?:east|west))|south|south(?:east|west)|east|west)-\d+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>string</code></td>
    <td>List of all remediation steps for a Security Lake exception. (pattern: &lt;code&gt;^&#91;\\\w\-_:/.@=+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>This error can occur if you configure the wrong timestamp format, or if the subset of entries used for validation had errors or missing values.</td>
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
    <td><a href="#list_data_lake_exceptions"><CopyableCode code="list_data_lake_exceptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.</td>
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
    defaultValue="list_data_lake_exceptions"
    values={[
        { label: 'list_data_lake_exceptions', value: 'list_data_lake_exceptions' }
    ]}
>
<TabItem value="list_data_lake_exceptions">

Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.

```sql
SELECT
exception,
region,
remediation,
timestamp
FROM aws.securitylake.data_lake_exceptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

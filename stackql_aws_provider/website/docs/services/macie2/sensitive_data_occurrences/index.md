--- 
title: sensitive_data_occurrences
hide_title: false
hide_table_of_contents: false
keywords:
  - sensitive_data_occurrences
  - macie2
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

Creates, updates, deletes, gets or lists a <code>sensitive_data_occurrences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sensitive_data_occurrences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.sensitive_data_occurrences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sensitive_data_occurrences"
    values={[
        { label: 'get_sensitive_data_occurrences', value: 'get_sensitive_data_occurrences' }
    ]}
>
<TabItem value="get_sensitive_data_occurrences">

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
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>If an error occurred when Amazon Macie attempted to retrieve occurrences of sensitive data reported by the finding, a description of the error that occurred. This value is null if the status (status) of the request is PROCESSING or SUCCESS.</td>
</tr>
<tr>
    <td><CopyableCode code="sensitive_data_occurrences" /></td>
    <td><code>object</code></td>
    <td>A map that specifies 1-100 types of sensitive data reported by the finding and, for each type, 1-10 occurrences of sensitive data.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the request to retrieve occurrences of sensitive data reported by the finding. Possible values are: ERROR - An error occurred when Amazon Macie attempted to locate, retrieve, or encrypt the sensitive data. The error value indicates the nature of the error that occurred. PROCESSING - Macie is processing the request. SUCCESS - Macie successfully located, retrieved, and encrypted the sensitive data. (SUCCESS, PROCESSING, ERROR)</td>
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
    <td><a href="#get_sensitive_data_occurrences"><CopyableCode code="get_sensitive_data_occurrences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-finding_id"><code>finding_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves occurrences of sensitive data reported by a finding.</td>
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
<tr id="parameter-finding_id">
    <td><CopyableCode code="finding_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the finding.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sensitive_data_occurrences"
    values={[
        { label: 'get_sensitive_data_occurrences', value: 'get_sensitive_data_occurrences' }
    ]}
>
<TabItem value="get_sensitive_data_occurrences">

Retrieves occurrences of sensitive data reported by a finding.

```sql
SELECT
error,
sensitive_data_occurrences,
status
FROM aws.macie2.sensitive_data_occurrences
WHERE finding_id = '{{ finding_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

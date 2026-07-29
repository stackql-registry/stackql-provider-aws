--- 
title: receipt_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - receipt_filters
  - ses
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

Creates, updates, deletes, gets or lists a <code>receipt_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="receipt_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.receipt_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_receipt_filters"
    values={[
        { label: 'list_receipt_filters', value: 'list_receipt_filters' }
    ]}
>
<TabItem value="list_receipt_filters">

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
    <td><CopyableCode code="ip_filter" /></td>
    <td><code>string</code></td>
    <td>A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the IP address filter. The name must meet the following requirements: Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). Start and end with a letter or number. Contain 64 characters or fewer.</td>
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
    <td><a href="#list_receipt_filters"><CopyableCode code="list_receipt_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the IP address filters associated with your Amazon Web Services account in the current Amazon Web Services Region. For information about managing IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#create_receipt_filter"><CopyableCode code="create_receipt_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new IP address filter. For information about setting up IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_receipt_filter"><CopyableCode code="delete_receipt_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-FilterName"><code>FilterName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified IP address filter. For information about managing IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>object</code></td>
    <td>A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.</td>
</tr>
<tr id="parameter-FilterName">
    <td><CopyableCode code="FilterName" /></td>
    <td><code>string</code></td>
    <td>The name of the IP address filter to delete.</td>
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
    defaultValue="list_receipt_filters"
    values={[
        { label: 'list_receipt_filters', value: 'list_receipt_filters' }
    ]}
>
<TabItem value="list_receipt_filters">

Lists the IP address filters associated with your Amazon Web Services account in the current Amazon Web Services Region. For information about managing IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
ip_filter,
name
FROM aws.ses.receipt_filters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_receipt_filter"
    values={[
        { label: 'create_receipt_filter', value: 'create_receipt_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_receipt_filter">

Creates a new IP address filter. For information about setting up IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.ses.receipt_filters (
Filter,
region
)
SELECT 
'{{ Filter }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: receipt_filters
  props:
    - name: Filter
      value: "{{ Filter }}"
      description: Required parameter for the receipt_filters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the receipt_filters resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_receipt_filter"
    values={[
        { label: 'delete_receipt_filter', value: 'delete_receipt_filter' }
    ]}
>
<TabItem value="delete_receipt_filter">

Deletes the specified IP address filter. For information about managing IP address filters, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.ses.receipt_filters
WHERE FilterName = '{{ FilterName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

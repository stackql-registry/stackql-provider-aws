--- 
title: dns_availabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_availabilities
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists a <code>dns_availabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dns_availabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.dns_availabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#check_dns_availability"><CopyableCode code="check_dns_availability" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CNAMEPrefix"><code>CNAMEPrefix</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Checks if the specified CNAME is available.</td>
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
<tr id="parameter-CNAMEPrefix">
    <td><CopyableCode code="CNAMEPrefix" /></td>
    <td><code>string</code></td>
    <td>The prefix used when this CNAME is reserved.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="check_dns_availability"
    values={[
        { label: 'check_dns_availability', value: 'check_dns_availability' }
    ]}
>
<TabItem value="check_dns_availability">

Checks if the specified CNAME is available.

```sql
EXEC aws.elasticbeanstalk.dns_availabilities.check_dns_availability 
@CNAMEPrefix='{{ CNAMEPrefix }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>

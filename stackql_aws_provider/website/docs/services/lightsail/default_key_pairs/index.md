--- 
title: default_key_pairs
hide_title: false
hide_table_of_contents: false
keywords:
  - default_key_pairs
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>default_key_pairs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_key_pairs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.default_key_pairs" /></td></tr>
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
    <td><a href="#download_default_key_pair"><CopyableCode code="download_default_key_pair" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Downloads the regional Amazon Lightsail default key pair. This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="download_default_key_pair"
    values={[
        { label: 'download_default_key_pair', value: 'download_default_key_pair' }
    ]}
>
<TabItem value="download_default_key_pair">

Downloads the regional Amazon Lightsail default key pair. This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.

```sql
EXEC aws.lightsail.default_key_pairs.download_default_key_pair 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>

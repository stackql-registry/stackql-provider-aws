--- 
title: registries
hide_title: false
hide_table_of_contents: false
keywords:
  - registries
  - ecr_public
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

Creates, updates, deletes, gets or lists a <code>registries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr_public.registries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_registries"
    values={[
        { label: 'describe_registries', value: 'describe_registries' }
    ]}
>
<TabItem value="describe_registries">

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
    <td><CopyableCode code="aliases" /></td>
    <td><code>array</code></td>
    <td>An array of objects that represents the aliases for a public registry.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the public registry.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that's associated with the registry. If you do not specify a registry, the default public registry is assumed. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_uri" /></td>
    <td><code>string</code></td>
    <td>The URI of a public registry. The URI contains a universal prefix and the registry alias.</td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the account is a verified Amazon Web Services Marketplace vendor. If an account is verified, each public repository receives a verified account badge on the Amazon ECR Public Gallery.</td>
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
    <td><a href="#describe_registries"><CopyableCode code="describe_registries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for a public registry.</td>
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
    defaultValue="describe_registries"
    values={[
        { label: 'describe_registries', value: 'describe_registries' }
    ]}
>
<TabItem value="describe_registries">

Returns details for a public registry.

```sql
SELECT
aliases,
registry_arn,
registry_id,
registry_uri,
verified
FROM aws.ecr_public.registries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

--- 
title: organization_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_configurations
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

Creates, updates, deletes, gets or lists an <code>organization_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.organization_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization_configuration"
    values={[
        { label: 'describe_organization_configuration', value: 'describe_organization_configuration' }
    ]}
>
<TabItem value="describe_organization_configuration">

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
    <td><CopyableCode code="autoEnable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Amazon Macie is enabled automatically for accounts that are added to the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="maxAccountLimitReached" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the maximum number of Amazon Macie member accounts are part of the organization.</td>
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
    <td><a href="#describe_organization_configuration"><CopyableCode code="describe_organization_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the Amazon Macie configuration settings for an organization in Organizations.</td>
</tr>
<tr>
    <td><a href="#update_organization_configuration"><CopyableCode code="update_organization_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autoEnable"><code>autoEnable</code></a></td>
    <td></td>
    <td>Updates the Amazon Macie configuration settings for an organization in Organizations.</td>
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
    defaultValue="describe_organization_configuration"
    values={[
        { label: 'describe_organization_configuration', value: 'describe_organization_configuration' }
    ]}
>
<TabItem value="describe_organization_configuration">

Retrieves the Amazon Macie configuration settings for an organization in Organizations.

```sql
SELECT
autoEnable,
maxAccountLimitReached
FROM aws.macie2.organization_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_organization_configuration"
    values={[
        { label: 'update_organization_configuration', value: 'update_organization_configuration' }
    ]}
>
<TabItem value="update_organization_configuration">

Updates the Amazon Macie configuration settings for an organization in Organizations.

```sql
UPDATE aws.macie2.organization_configurations
SET 
autoEnable = {{ autoEnable }}
WHERE 
region = '{{ region }}' --required
AND autoEnable = {{ autoEnable }} --required;
```
</TabItem>
</Tabs>

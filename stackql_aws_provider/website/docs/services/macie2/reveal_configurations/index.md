--- 
title: reveal_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - reveal_configurations
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

Creates, updates, deletes, gets or lists a <code>reveal_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reveal_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.reveal_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reveal_configuration"
    values={[
        { label: 'get_reveal_configuration', value: 'get_reveal_configuration' }
    ]}
>
<TabItem value="get_reveal_configuration">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The KMS key that's used to encrypt the sensitive data, and the status of the configuration for the Amazon Macie account.</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_configuration" /></td>
    <td><code>object</code></td>
    <td>The access method and settings that are used to retrieve the sensitive data.</td>
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
    <td><a href="#get_reveal_configuration"><CopyableCode code="get_reveal_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.</td>
</tr>
<tr>
    <td><a href="#update_reveal_configuration"><CopyableCode code="update_reveal_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.</td>
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
    defaultValue="get_reveal_configuration"
    values={[
        { label: 'get_reveal_configuration', value: 'get_reveal_configuration' }
    ]}
>
<TabItem value="get_reveal_configuration">

Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

```sql
SELECT
configuration,
retrieval_configuration
FROM aws.macie2.reveal_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_reveal_configuration"
    values={[
        { label: 'update_reveal_configuration', value: 'update_reveal_configuration' }
    ]}
>
<TabItem value="update_reveal_configuration">

Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

```sql
UPDATE aws.macie2.reveal_configurations
SET 
configuration = '{{ configuration }}',
retrievalConfiguration = '{{ retrievalConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND configuration = '{{ configuration }}' --required
RETURNING
configuration,
retrieval_configuration;
```
</TabItem>
</Tabs>

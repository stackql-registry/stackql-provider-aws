--- 
title: external_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - external_connections
  - codeartifact
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

Creates, updates, deletes, gets or lists an <code>external_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="external_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.external_connections" /></td></tr>
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
    <td><a href="#associate_external_connection"><CopyableCode code="associate_external_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-external-connection"><code>external-connection</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Adds an existing external connection to a repository. One external connection is allowed per repository. A repository can have one or more upstream repositories, or an external connection.</td>
</tr>
<tr>
    <td><a href="#disassociate_external_connection"><CopyableCode code="disassociate_external_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-external-connection"><code>external-connection</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Removes an existing external connection from a repository.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the repository from which to remove the external repository.</td>
</tr>
<tr id="parameter-external-connection">
    <td><CopyableCode code="external-connection" /></td>
    <td><code>string</code></td>
    <td>The name of the external connection to be removed from the repository.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository from which the external connection will be removed.</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_external_connection"
    values={[
        { label: 'associate_external_connection', value: 'associate_external_connection' }
    ]}
>
<TabItem value="associate_external_connection">

Adds an existing external connection to a repository. One external connection is allowed per repository. A repository can have one or more upstream repositories, or an external connection.

```sql
UPDATE aws.codeartifact.external_connections
SET 
-- No updatable properties
WHERE 
domain = '{{ domain }}' --required
AND repository = '{{ repository }}' --required
AND `external-connection` = '{{ external-connection }}' --required
AND region = '{{ region }}' --required
AND `domain-owner` = '{{ domain-owner}}'
RETURNING
repository;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_external_connection"
    values={[
        { label: 'disassociate_external_connection', value: 'disassociate_external_connection' }
    ]}
>
<TabItem value="disassociate_external_connection">

Removes an existing external connection from a repository.

```sql
EXEC aws.codeartifact.external_connections.disassociate_external_connection 
@domain='{{ domain }}' --required, 
@repository='{{ repository }}' --required, 
@external-connection='{{ external-connection }}' --required, 
@region='{{ region }}' --required, 
@domain-owner='{{ domain-owner }}'
;
```
</TabItem>
</Tabs>

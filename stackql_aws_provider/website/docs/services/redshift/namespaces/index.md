--- 
title: namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - namespaces
  - redshift
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

Creates, updates, deletes, gets or lists a <code>namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.namespaces" /></td></tr>
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
    <td><a href="#register_namespace"><CopyableCode code="register_namespace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-NamespaceIdentifier"><code>NamespaceIdentifier</code></a>, <a href="#parameter-ConsumerIdentifiers"><code>ConsumerIdentifiers</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Registers a cluster or serverless namespace to the Amazon Web Services Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#deregister_namespace"><CopyableCode code="deregister_namespace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NamespaceIdentifier"><code>NamespaceIdentifier</code></a>, <a href="#parameter-ConsumerIdentifiers"><code>ConsumerIdentifiers</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters a cluster or serverless namespace from the Amazon Web Services Glue Data Catalog.</td>
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
<tr id="parameter-ConsumerIdentifiers">
    <td><CopyableCode code="ConsumerIdentifiers" /></td>
    <td><code>array</code></td>
    <td>An array containing the ID of the consumer account that you want to deregister the cluster or serverless namespace from.</td>
</tr>
<tr id="parameter-NamespaceIdentifier">
    <td><CopyableCode code="NamespaceIdentifier" /></td>
    <td><code>object</code></td>
    <td>The unique identifier of the cluster or serverless namespace that you want to deregister.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="register_namespace"
    values={[
        { label: 'register_namespace', value: 'register_namespace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_namespace">

Registers a cluster or serverless namespace to the Amazon Web Services Glue Data Catalog.

```sql
INSERT INTO aws.redshift.namespaces (
NamespaceIdentifier,
ConsumerIdentifiers,
region
)
SELECT 
'{{ NamespaceIdentifier }}',
'{{ ConsumerIdentifiers }}',
'{{ region }}'
RETURNING
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: namespaces
  props:
    - name: NamespaceIdentifier
      value: "{{ NamespaceIdentifier }}"
      description: Required parameter for the namespaces resource.
    - name: ConsumerIdentifiers
      value: "{{ ConsumerIdentifiers }}"
      description: Required parameter for the namespaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the namespaces resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_namespace"
    values={[
        { label: 'deregister_namespace', value: 'deregister_namespace' }
    ]}
>
<TabItem value="deregister_namespace">

Deregisters a cluster or serverless namespace from the Amazon Web Services Glue Data Catalog.

```sql
DELETE FROM aws.redshift.namespaces
WHERE NamespaceIdentifier = '{{ NamespaceIdentifier }}' --required
AND ConsumerIdentifiers = '{{ ConsumerIdentifiers }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

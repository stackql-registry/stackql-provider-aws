--- 
title: services_by_namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - services_by_namespaces
  - ecs
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

Creates, updates, deletes, gets or lists a <code>services_by_namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services_by_namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.services_by_namespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_services_by_namespace"
    values={[
        { label: 'list_services_by_namespace', value: 'list_services_by_namespace' }
    ]}
>
<TabItem value="list_services_by_namespace">

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
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>The list of full ARN entries for each service that's associated with the specified namespace.</td>
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
    <td><a href="#list_services_by_namespace"><CopyableCode code="list_services_by_namespace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, ListServices can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use ListServices. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide.</td>
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
    defaultValue="list_services_by_namespace"
    values={[
        { label: 'list_services_by_namespace', value: 'list_services_by_namespace' }
    ]}
>
<TabItem value="list_services_by_namespace">

This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, ListServices can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use ListServices. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide.

```sql
SELECT
service_arn
FROM aws.ecs.services_by_namespaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

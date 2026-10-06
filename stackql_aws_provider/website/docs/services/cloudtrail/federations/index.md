--- 
title: federations
hide_title: false
hide_table_of_contents: false
keywords:
  - federations
  - cloudtrail
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

Creates, updates, deletes, gets or lists a <code>federations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="federations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.federations" /></td></tr>
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
    <td><a href="#disable_federation"><CopyableCode code="disable_federation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventDataStore"><code>EventDataStore</code></a></td>
    <td></td>
    <td>CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Disables Lake query federation on the specified event data store. When you disable federation, CloudTrail disables the integration with Glue, Lake Formation, and Amazon Athena. After disabling Lake query federation, you can no longer query your event data in Amazon Athena. No CloudTrail Lake data is deleted when you disable federation and you can continue to run queries in CloudTrail Lake.</td>
</tr>
<tr>
    <td><a href="#enable_federation"><CopyableCode code="enable_federation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventDataStore"><code>EventDataStore</code></a>, <a href="#parameter-FederationRoleArn"><code>FederationRoleArn</code></a></td>
    <td></td>
    <td>CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Enables Lake query federation on the specified event data store. Federating an event data store lets you view the metadata associated with the event data store in the Glue Data Catalog and run SQL queries against your event data using Amazon Athena. The table metadata stored in the Glue Data Catalog lets the Athena query engine know how to find, read, and process the data that you want to query. When you enable Lake query federation, CloudTrail creates a managed database named aws:cloudtrail (if the database doesn't already exist) and a managed federated table in the Glue Data Catalog. The event data store ID is used for the table name. CloudTrail registers the role ARN and event data store in Lake Formation, the service responsible for allowing fine-grained access control of the federated resources in the Glue Data Catalog. For more information about Lake query federation, see Federate an event data store.</td>
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
    defaultValue="disable_federation"
    values={[
        { label: 'disable_federation', value: 'disable_federation' },
        { label: 'enable_federation', value: 'enable_federation' }
    ]}
>
<TabItem value="disable_federation">

CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Disables Lake query federation on the specified event data store. When you disable federation, CloudTrail disables the integration with Glue, Lake Formation, and Amazon Athena. After disabling Lake query federation, you can no longer query your event data in Amazon Athena. No CloudTrail Lake data is deleted when you disable federation and you can continue to run queries in CloudTrail Lake.

```sql
EXEC aws.cloudtrail.federations.disable_federation 
@region='{{ region }}' --required 
@@json=
'{
"EventDataStore": "{{ EventDataStore }}"
}'
;
```
</TabItem>
<TabItem value="enable_federation">

CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Enables Lake query federation on the specified event data store. Federating an event data store lets you view the metadata associated with the event data store in the Glue Data Catalog and run SQL queries against your event data using Amazon Athena. The table metadata stored in the Glue Data Catalog lets the Athena query engine know how to find, read, and process the data that you want to query. When you enable Lake query federation, CloudTrail creates a managed database named aws:cloudtrail (if the database doesn't already exist) and a managed federated table in the Glue Data Catalog. The event data store ID is used for the table name. CloudTrail registers the role ARN and event data store in Lake Formation, the service responsible for allowing fine-grained access control of the federated resources in the Glue Data Catalog. For more information about Lake query federation, see Federate an event data store.

```sql
EXEC aws.cloudtrail.federations.enable_federation 
@region='{{ region }}' --required 
@@json=
'{
"EventDataStore": "{{ EventDataStore }}", 
"FederationRoleArn": "{{ FederationRoleArn }}"
}'
;
```
</TabItem>
</Tabs>

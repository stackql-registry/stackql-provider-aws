--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - logs
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_integration"
    values={[
        { label: 'get_integration', value: 'get_integration' },
        { label: 'list_integrations', value: 'list_integrations' }
    ]}
>
<TabItem value="get_integration">

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
    <td><CopyableCode code="integrationDetails" /></td>
    <td><code>object</code></td>
    <td>A structure that contains information about the integration configuration. For an integration with OpenSearch Service, this includes information about OpenSearch Service resources such as the collection, the workspace, and policies.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationName" /></td>
    <td><code>string</code></td>
    <td>The name of the integration. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="integrationStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of this integration. (PROVISIONING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="integrationType" /></td>
    <td><code>string</code></td>
    <td>The type of integration. Integrations with OpenSearch Service have the type OPENSEARCH. (OPENSEARCH)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_integrations">

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
    <td><CopyableCode code="integrationSummaries" /></td>
    <td><code>array</code></td>
    <td>An array, where each object in the array contains information about one CloudWatch Logs integration in this account.</td>
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
    <td><a href="#get_integration"><CopyableCode code="get_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one integration between CloudWatch Logs and OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#list_integrations"><CopyableCode code="list_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of integrations between CloudWatch Logs and other services in this account. Currently, only one integration can be created in an account, and this integration must be with OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#associate_source_to_s3_table_integration"><CopyableCode code="associate_source_to_s3_table_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-integrationArn"><code>integrationArn</code></a>, <a href="#parameter-dataSource"><code>dataSource</code></a></td>
    <td></td>
    <td>Associates a data source with an S3 Table Integration for query access in the 'logs' namespace. This enables querying log data using analytics engines that support Iceberg such as Amazon Athena, Amazon Redshift, and Apache Spark.</td>
</tr>
<tr>
    <td><a href="#disassociate_source_from_s3_table_integration"><CopyableCode code="disassociate_source_from_s3_table_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-identifier"><code>identifier</code></a></td>
    <td></td>
    <td>Disassociates a data source from an S3 Table Integration, removing query access and deleting all associated data from the integration.</td>
</tr>
<tr>
    <td><a href="#put_integration"><CopyableCode code="put_integration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-integrationName"><code>integrationName</code></a>, <a href="#parameter-resourceConfig"><code>resourceConfig</code></a>, <a href="#parameter-integrationType"><code>integrationType</code></a></td>
    <td></td>
    <td>Creates an integration between CloudWatch Logs and another service in this account. Currently, only integrations with OpenSearch Service are supported, and currently you can have only one integration in your account. Integrating with OpenSearch Service makes it possible for you to create curated vended logs dashboards, powered by OpenSearch Service analytics. For more information, see Vended log dashboards powered by Amazon OpenSearch Service. You can use this operation only to create a new integration. You can't modify an existing integration.</td>
</tr>
<tr>
    <td><a href="#delete_integration"><CopyableCode code="delete_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the integration between CloudWatch Logs and OpenSearch Service. If your integration has active vended logs dashboards, you must specify true for the force parameter, otherwise the operation will fail. If you delete the integration by setting force to true, all your vended logs dashboards powered by OpenSearch Service will be deleted and the data that was on them will no longer be accessible.</td>
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
    defaultValue="get_integration"
    values={[
        { label: 'get_integration', value: 'get_integration' },
        { label: 'list_integrations', value: 'list_integrations' }
    ]}
>
<TabItem value="get_integration">

Returns information about one integration between CloudWatch Logs and OpenSearch Service.

```sql
SELECT
integrationDetails,
integrationName,
integrationStatus,
integrationType
FROM aws.logs.integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_integrations">

Returns a list of integrations between CloudWatch Logs and other services in this account. Currently, only one integration can be created in an account, and this integration must be with OpenSearch Service.

```sql
SELECT
integrationSummaries
FROM aws.logs.integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_source_to_s3_table_integration"
    values={[
        { label: 'associate_source_to_s3_table_integration', value: 'associate_source_to_s3_table_integration' },
        { label: 'disassociate_source_from_s3_table_integration', value: 'disassociate_source_from_s3_table_integration' }
    ]}
>
<TabItem value="associate_source_to_s3_table_integration">

Associates a data source with an S3 Table Integration for query access in the 'logs' namespace. This enables querying log data using analytics engines that support Iceberg such as Amazon Athena, Amazon Redshift, and Apache Spark.

```sql
UPDATE aws.logs.integrations
SET 
integrationArn = '{{ integrationArn }}',
dataSource = '{{ dataSource }}'
WHERE 
region = '{{ region }}' --required
AND integrationArn = '{{ integrationArn }}' --required
AND dataSource = '{{ dataSource }}' --required
RETURNING
identifier;
```
</TabItem>
<TabItem value="disassociate_source_from_s3_table_integration">

Disassociates a data source from an S3 Table Integration, removing query access and deleting all associated data from the integration.

```sql
UPDATE aws.logs.integrations
SET 
identifier = '{{ identifier }}'
WHERE 
region = '{{ region }}' --required
AND identifier = '{{ identifier }}' --required
RETURNING
identifier;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_integration"
    values={[
        { label: 'put_integration', value: 'put_integration' }
    ]}
>
<TabItem value="put_integration">

Creates an integration between CloudWatch Logs and another service in this account. Currently, only integrations with OpenSearch Service are supported, and currently you can have only one integration in your account. Integrating with OpenSearch Service makes it possible for you to create curated vended logs dashboards, powered by OpenSearch Service analytics. For more information, see Vended log dashboards powered by Amazon OpenSearch Service. You can use this operation only to create a new integration. You can't modify an existing integration.

```sql
REPLACE aws.logs.integrations
SET 
integrationName = '{{ integrationName }}',
resourceConfig = '{{ resourceConfig }}',
integrationType = '{{ integrationType }}'
WHERE 
region = '{{ region }}' --required
AND integrationName = '{{ integrationName }}' --required
AND resourceConfig = '{{ resourceConfig }}' --required
AND integrationType = '{{ integrationType }}' --required
RETURNING
integrationName,
integrationStatus;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration"
    values={[
        { label: 'delete_integration', value: 'delete_integration' }
    ]}
>
<TabItem value="delete_integration">

Deletes the integration between CloudWatch Logs and OpenSearch Service. If your integration has active vended logs dashboards, you must specify true for the force parameter, otherwise the operation will fail. If you delete the integration by setting force to true, all your vended logs dashboards powered by OpenSearch Service will be deleted and the data that was on them will no longer be accessible.

```sql
DELETE FROM aws.logs.integrations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

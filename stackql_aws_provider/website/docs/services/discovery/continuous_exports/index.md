--- 
title: continuous_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - continuous_exports
  - discovery
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

Creates, updates, deletes, gets or lists a <code>continuous_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="continuous_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.continuous_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_continuous_exports"
    values={[
        { label: 'describe_continuous_exports', value: 'describe_continuous_exports' }
    ]}
>
<TabItem value="describe_continuous_exports">

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
    <td><CopyableCode code="dataSource" /></td>
    <td><code>string</code></td>
    <td>The type of data collector used to gather this data (currently only offered for AGENT). (AGENT)</td>
</tr>
<tr>
    <td><CopyableCode code="exportId" /></td>
    <td><code>string</code></td>
    <td>The unique ID assigned to this export. (pattern: &lt;code&gt;\S*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the s3 bucket where the export data parquet files are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaStorageConfig" /></td>
    <td><code>object</code></td>
    <td>An object which describes how the data is stored. databaseName - the name of the Glue database used to store the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp representing when the continuous export was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Describes the status of the export. Can be one of the following values: START_IN_PROGRESS - setting up resources to start continuous export. START_FAILED - an error occurred setting up continuous export. To recover, call start-continuous-export again. ACTIVE - data is being exported to the customer bucket. ERROR - an error occurred during export. To fix the issue, call stop-continuous-export and start-continuous-export. STOP_IN_PROGRESS - stopping the export. STOP_FAILED - an error occurred stopping the export. To recover, call stop-continuous-export again. INACTIVE - the continuous export has been stopped. Data is no longer being exported to the customer bucket. (START_IN_PROGRESS, START_FAILED, ACTIVE, ERROR, STOP_IN_PROGRESS, STOP_FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetail" /></td>
    <td><code>string</code></td>
    <td>Contains information about any errors that have occurred. This data type can have the following values: ACCESS_DENIED - You don’t have permission to start Data Exploration in Amazon Athena. Contact your Amazon Web Services administrator for help. For more information, see Setting Up Amazon Web Services Application Discovery Service in the Application Discovery Service User Guide. DELIVERY_STREAM_LIMIT_FAILURE - You reached the limit for Amazon Kinesis Data Firehose delivery streams. Reduce the number of streams or request a limit increase and try again. For more information, see Kinesis Data Streams Limits in the Amazon Kinesis Data Streams Developer Guide. FIREHOSE_ROLE_MISSING - The Data Exploration feature is in an error state because your user is missing the Amazon Web ServicesApplicationDiscoveryServiceFirehose role. Turn on Data Exploration in Amazon Athena and try again. For more information, see Creating the Amazon Web ServicesApplicationDiscoveryServiceFirehose Role in the Application Discovery Service User Guide. FIREHOSE_STREAM_DOES_NOT_EXIST - The Data Exploration feature is in an error state because your user is missing one or more of the Kinesis data delivery streams. INTERNAL_FAILURE - The Data Exploration feature is in an error state because of an internal failure. Try again later. If this problem persists, contact Amazon Web Services Support. LAKE_FORMATION_ACCESS_DENIED - You don't have sufficient lake formation permissions to start continuous export. For more information, see Upgrading Amazon Web Services Glue Data Permissions to the Amazon Web Services Lake Formation Model in the Amazon Web Services Lake Formation Developer Guide. You can use one of the following two ways to resolve this issue. If you don’t want to use the Lake Formation permission model, you can change the default Data Catalog settings to use only Amazon Web Services Identity and Access Management (IAM) access control for new databases. For more information, see Change Data Catalog Settings in the Lake Formation Developer Guide. You can give the service-linked IAM roles AWSServiceRoleForApplicationDiscoveryServiceContinuousExport and AWSApplicationDiscoveryServiceFirehose the required Lake Formation permissions. For more information, see Granting Database Permissions in the Lake Formation Developer Guide. AWSServiceRoleForApplicationDiscoveryServiceContinuousExport - Grant database creator permissions, which gives the role database creation ability and implicit permissions for any created tables. For more information, see Implicit Lake Formation Permissions in the Lake Formation Developer Guide. AWSApplicationDiscoveryServiceFirehose - Grant describe permissions for all tables in the database. S3_BUCKET_LIMIT_FAILURE - You reached the limit for Amazon S3 buckets. Reduce the number of S3 buckets or request a limit increase and try again. For more information, see Bucket Restrictions and Limitations in the Amazon Simple Storage Service Developer Guide. S3_NOT_SIGNED_UP - Your account is not signed up for the Amazon S3 service. You must sign up before you can use Amazon S3. You can sign up at the following URL: https:​//aws.amazon.com/s3. (pattern: &lt;code&gt;&#91;\s\S&#93;*\S&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stopTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that represents when this continuous export was stopped.</td>
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
    <td><a href="#describe_continuous_exports"><CopyableCode code="describe_continuous_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists exports as specified by ID. All continuous exports associated with your user can be listed if you call DescribeContinuousExports as is without passing any parameters.</td>
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
    defaultValue="describe_continuous_exports"
    values={[
        { label: 'describe_continuous_exports', value: 'describe_continuous_exports' }
    ]}
>
<TabItem value="describe_continuous_exports">

Lists exports as specified by ID. All continuous exports associated with your user can be listed if you call DescribeContinuousExports as is without passing any parameters.

```sql
SELECT
dataSource,
exportId,
s3Bucket,
schemaStorageConfig,
startTime,
status,
statusDetail,
stopTime
FROM aws.discovery.continuous_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

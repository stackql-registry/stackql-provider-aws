--- 
title: application_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - application_versions
  - kinesisanalyticsv2
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

Creates, updates, deletes, gets or lists an <code>application_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisanalyticsv2.application_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_version"
    values={[
        { label: 'describe_application_version', value: 'describe_application_version' },
        { label: 'list_application_versions', value: 'list_application_versions' }
    ]}
>
<TabItem value="describe_application_version">

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
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_configuration_description" /></td>
    <td><code>object</code></td>
    <td>Describes details about the application code and starting parameters for a Managed Service for Apache Flink application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_description" /></td>
    <td><code>string</code></td>
    <td>The description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_maintenance_configuration_description" /></td>
    <td><code>object</code></td>
    <td>The details of the maintenance configuration for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_mode" /></td>
    <td><code>string</code></td>
    <td>To create a Managed Service for Apache Flink Studio notebook, you must set the mode to INTERACTIVE. However, for a Managed Service for Apache Flink application, the mode is optional. (STREAMING, INTERACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_status" /></td>
    <td><code>string</code></td>
    <td>The status of the application. (DELETING, STARTING, STOPPING, READY, RUNNING, UPDATING, AUTOSCALING, FORCE_STOPPING, ROLLING_BACK, MAINTENANCE, ROLLED_BACK)</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_create_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the application version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Provides the current application version. Managed Service for Apache Flink updates the ApplicationVersionId each time you update the application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_rolled_back_from" /></td>
    <td><code>integer (int64)</code></td>
    <td>If you reverted the application using RollbackApplication, the application version when RollbackApplication was called.</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_rolled_back_to" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version to which you want to roll back the application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_updated_from" /></td>
    <td><code>integer (int64)</code></td>
    <td>The previous application version before the latest application update. RollbackApplication reverts the application to this version.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_watch_logging_option_descriptions" /></td>
    <td><code>array</code></td>
    <td>Describes the application Amazon CloudWatch logging options.</td>
</tr>
<tr>
    <td><CopyableCode code="conditional_token" /></td>
    <td><code>string</code></td>
    <td>A value you use to implement strong concurrency for application updates. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_+/=&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The current timestamp when the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The current timestamp when the application was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_environment" /></td>
    <td><code>string</code></td>
    <td>The runtime environment for the application. (SQL-1_0, FLINK-1_6, FLINK-1_8, ZEPPELIN-FLINK-1_0, FLINK-1_11, FLINK-1_13, ZEPPELIN-FLINK-2_0, FLINK-1_15, ZEPPELIN-FLINK-3_0, FLINK-1_18, FLINK-1_19, FLINK-1_20, FLINK-2_2)</td>
</tr>
<tr>
    <td><CopyableCode code="service_execution_role" /></td>
    <td><code>string</code></td>
    <td>Specifies the IAM role that the application uses to access external resources. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_versions">

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
    <td><CopyableCode code="application_status" /></td>
    <td><code>string</code></td>
    <td>The status of the application. (DELETING, STARTING, STOPPING, READY, RUNNING, UPDATING, AUTOSCALING, FORCE_STOPPING, ROLLING_BACK, MAINTENANCE, ROLLED_BACK)</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the application version. Managed Service for Apache Flink updates the ApplicationVersionId each time you update the application.</td>
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
    <td><a href="#describe_application_version"><CopyableCode code="describe_application_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the ListApplicationVersions operation. This operation is supported only for Managed Service for Apache Flink.</td>
</tr>
<tr>
    <td><a href="#list_application_versions"><CopyableCode code="list_application_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version. To get the complete description of a specific application version, invoke the DescribeApplicationVersion operation. This operation is supported only for Managed Service for Apache Flink.</td>
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
    defaultValue="describe_application_version"
    values={[
        { label: 'describe_application_version', value: 'describe_application_version' },
        { label: 'list_application_versions', value: 'list_application_versions' }
    ]}
>
<TabItem value="describe_application_version">

Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the ListApplicationVersions operation. This operation is supported only for Managed Service for Apache Flink.

```sql
SELECT
application_arn,
application_configuration_description,
application_description,
application_maintenance_configuration_description,
application_mode,
application_name,
application_status,
application_version_create_timestamp,
application_version_id,
application_version_rolled_back_from,
application_version_rolled_back_to,
application_version_updated_from,
cloud_watch_logging_option_descriptions,
conditional_token,
create_timestamp,
last_update_timestamp,
runtime_environment,
service_execution_role
FROM aws.kinesisanalyticsv2.application_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_versions">

Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version. To get the complete description of a specific application version, invoke the DescribeApplicationVersion operation. This operation is supported only for Managed Service for Apache Flink.

```sql
SELECT
application_status,
application_version_id
FROM aws.kinesisanalyticsv2.application_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>

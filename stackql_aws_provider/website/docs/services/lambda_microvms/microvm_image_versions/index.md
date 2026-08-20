--- 
title: microvm_image_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - microvm_image_versions
  - lambda_microvms
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

Creates, updates, deletes, gets or lists a <code>microvm_image_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="microvm_image_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda_microvms.microvm_image_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_microvm_image_version"
    values={[
        { label: 'get_microvm_image_version', value: 'get_microvm_image_version' },
        { label: 'list_microvm_image_versions', value: 'list_microvm_image_versions' }
    ]}
>
<TabItem value="get_microvm_image_version">

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
    <td><CopyableCode code="additional_os_capabilities" /></td>
    <td><code>array</code></td>
    <td>List of capabilities granted to the application when booted</td>
</tr>
<tr>
    <td><CopyableCode code="base_image_arn" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="base_image_version" /></td>
    <td><code>string</code></td>
    <td>The specific version of the base MicroVM image. (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an IAM role that the service assumes to perform actions on behalf of the caller. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code_artifact" /></td>
    <td><code>object</code></td>
    <td>Contains the location of the code artifact for a MicroVM image.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_configurations" /></td>
    <td><code>array</code></td>
    <td>List of CPU architectures</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the version.</td>
</tr>
<tr>
    <td><CopyableCode code="egress_network_connectors" /></td>
    <td><code>array</code></td>
    <td>The list of egress network connectors available to the MicroVM at runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>object</code></td>
    <td>Environment variables set in the MicroVM runtime environment.</td>
</tr>
<tr>
    <td><CopyableCode code="hooks" /></td>
    <td><code>object</code></td>
    <td>Lifecycle hook configuration for MicroVMs and MicroVM images.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_version" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>object</code></td>
    <td>Configuration for MicroVM logging output. Specify exactly one: cloudWatch to enable CloudWatch logging, or disabled to turn off logging.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>List of resources</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the version. (PENDING, IN_PROGRESS, SUCCESSFUL, FAILED, DELETING, DELETED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current state. For example, one or more builds failed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The availability status of the version: ACTIVE (can be used by RunMicrovm) or INACTIVE (blocked from launching new MicroVMs). (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs associated with the version.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the version was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_microvm_image_versions">

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
    <td><CopyableCode code="additional_os_capabilities" /></td>
    <td><code>array</code></td>
    <td>List of capabilities granted to the application when booted</td>
</tr>
<tr>
    <td><CopyableCode code="base_image_arn" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="base_image_version" /></td>
    <td><code>string</code></td>
    <td>The specific version of the base MicroVM image. (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an IAM role that the service assumes to perform actions on behalf of the caller. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code_artifact" /></td>
    <td><code>object</code></td>
    <td>Contains the location of the code artifact for a MicroVM image.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_configurations" /></td>
    <td><code>array</code></td>
    <td>List of CPU architectures</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the version.</td>
</tr>
<tr>
    <td><CopyableCode code="egress_network_connectors" /></td>
    <td><code>array</code></td>
    <td>The list of egress network connectors available to the MicroVM at runtime.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>object</code></td>
    <td>Environment variables set in the MicroVM runtime environment.</td>
</tr>
<tr>
    <td><CopyableCode code="hooks" /></td>
    <td><code>object</code></td>
    <td>Lifecycle hook configuration for MicroVMs and MicroVM images.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_version" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>object</code></td>
    <td>Configuration for MicroVM logging output. Specify exactly one: cloudWatch to enable CloudWatch logging, or disabled to turn off logging.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>List of resources</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the version. (PENDING, IN_PROGRESS, SUCCESSFUL, FAILED, DELETING, DELETED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current state. For example, one or more builds failed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The availability status of the version: ACTIVE (can be used by RunMicrovm) or INACTIVE (blocked from launching new MicroVMs). (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs associated with the version.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the version was last updated.</td>
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
    <td><a href="#get_microvm_image_version"><CopyableCode code="get_microvm_image_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-image_version"><code>image_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a specific version of a MicroVM image, including its configuration, state, and build information.</td>
</tr>
<tr>
    <td><a href="#list_microvm_image_versions"><CopyableCode code="list_microvm_image_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists versions of a MicroVM image. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#update_microvm_image_version"><CopyableCode code="update_microvm_image_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-image_version"><code>image_version</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the status of a specific MicroVM image version.</td>
</tr>
<tr>
    <td><a href="#delete_microvm_image_version"><CopyableCode code="delete_microvm_image_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-image_identifier"><code>image_identifier</code></a>, <a href="#parameter-image_version"><code>image_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific version of a MicroVM image. This operation is idempotent; deleting a version that has already been deleted succeeds without error.</td>
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
<tr id="parameter-image_identifier">
    <td><CopyableCode code="image_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ARN or ID) of the MicroVM image.</td>
</tr>
<tr id="parameter-image_version">
    <td><CopyableCode code="image_version" /></td>
    <td><code>string</code></td>
    <td>The version of the MicroVM image to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous call. Use this token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_microvm_image_version"
    values={[
        { label: 'get_microvm_image_version', value: 'get_microvm_image_version' },
        { label: 'list_microvm_image_versions', value: 'list_microvm_image_versions' }
    ]}
>
<TabItem value="get_microvm_image_version">

Retrieves the details of a specific version of a MicroVM image, including its configuration, state, and build information.

```sql
SELECT
additional_os_capabilities,
base_image_arn,
base_image_version,
build_role_arn,
code_artifact,
cpu_configurations,
created_at,
description,
egress_network_connectors,
environment_variables,
hooks,
image_arn,
image_version,
logging,
resources,
state,
state_reason,
status,
tags,
updated_at
FROM aws.lambda_microvms.microvm_image_versions
WHERE image_identifier = '{{ image_identifier }}' -- required
AND image_version = '{{ image_version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_microvm_image_versions">

Lists versions of a MicroVM image. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
additional_os_capabilities,
base_image_arn,
base_image_version,
build_role_arn,
code_artifact,
cpu_configurations,
created_at,
description,
egress_network_connectors,
environment_variables,
hooks,
image_arn,
image_version,
logging,
resources,
state,
state_reason,
status,
tags,
updated_at
FROM aws.lambda_microvms.microvm_image_versions
WHERE image_identifier = '{{ image_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_microvm_image_version"
    values={[
        { label: 'update_microvm_image_version', value: 'update_microvm_image_version' }
    ]}
>
<TabItem value="update_microvm_image_version">

Updates the status of a specific MicroVM image version.

```sql
UPDATE aws.lambda_microvms.microvm_image_versions
SET 
status = '{{ status }}'
WHERE 
image_identifier = '{{ image_identifier }}' --required
AND image_version = '{{ image_version }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required
RETURNING
additional_os_capabilities,
base_image_arn,
base_image_version,
build_role_arn,
code_artifact,
cpu_configurations,
created_at,
description,
egress_network_connectors,
environment_variables,
hooks,
image_arn,
image_version,
logging,
resources,
state,
state_reason,
status,
tags,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_microvm_image_version"
    values={[
        { label: 'delete_microvm_image_version', value: 'delete_microvm_image_version' }
    ]}
>
<TabItem value="delete_microvm_image_version">

Deletes a specific version of a MicroVM image. This operation is idempotent; deleting a version that has already been deleted succeeds without error.

```sql
DELETE FROM aws.lambda_microvms.microvm_image_versions
WHERE image_identifier = '{{ image_identifier }}' --required
AND image_version = '{{ image_version }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

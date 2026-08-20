--- 
title: microvms
hide_title: false
hide_table_of_contents: false
keywords:
  - microvms
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

Creates, updates, deletes, gets or lists a <code>microvms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="microvms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda_microvms.microvms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_microvm"
    values={[
        { label: 'get_microvm', value: 'get_microvm' },
        { label: 'list_microvms', value: 'list_microvms' }
    ]}
>
<TabItem value="get_microvm">

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
    <td><CopyableCode code="egress_network_connectors" /></td>
    <td><code>array</code></td>
    <td>The list of egress network connectors configured for the MicroVM.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The HTTPS endpoint URL for communicating with the MicroVM. Include a valid authentication token in the X-aws-proxy-auth header when sending requests.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an IAM role that the service assumes to perform actions on behalf of the caller. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="idle_policy" /></td>
    <td><code>object</code></td>
    <td>The idle policy configuration of the MicroVM, controlling auto-suspend and auto-resume behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the MicroVM image used to run this MicroVM.</td>
</tr>
<tr>
    <td><CopyableCode code="image_version" /></td>
    <td><code>string</code></td>
    <td>The version of the MicroVM image used to run this MicroVM. (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_network_connectors" /></td>
    <td><code>array</code></td>
    <td>The list of ingress network connectors configured for the MicroVM.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_duration_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum duration in seconds that the MicroVM can exist before being terminated by the platform.</td>
</tr>
<tr>
    <td><CopyableCode code="microvm_id" /></td>
    <td><code>string</code></td>
    <td>The ARN or ID of the MicroVm</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the MicroVM first started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the MicroVM. (PENDING, RUNNING, SUSPENDING, SUSPENDED, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>A string which is not empty or blank (only whitespace). (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="terminated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the MicroVM terminated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_microvms">

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
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the MicroVM image used to run this MicroVM.</td>
</tr>
<tr>
    <td><CopyableCode code="image_version" /></td>
    <td><code>string</code></td>
    <td>The version of the MicroVM image used to run this MicroVM. (pattern: &lt;code&gt;&#91;^\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="microvm_id" /></td>
    <td><code>string</code></td>
    <td>The ARN or ID of the MicroVm</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the MicroVM started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the MicroVM. (PENDING, RUNNING, SUSPENDING, SUSPENDED, TERMINATING, TERMINATED)</td>
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
    <td><a href="#get_microvm"><CopyableCode code="get_microvm" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-microvm_identifier"><code>microvm_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a specific MicroVM, including its state, endpoint, image information, and configuration. The state field is eventually consistent — determine readiness by connecting to the endpoint.</td>
</tr>
<tr>
    <td><a href="#list_microvms"><CopyableCode code="list_microvms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-imageIdentifier"><code>imageIdentifier</code></a>, <a href="#parameter-imageVersion"><code>imageVersion</code></a></td>
    <td>Lists MicroVMs in the account with optional filtering by image and version. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_microvm_auth_token"><CopyableCode code="create_microvm_auth_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-microvm_identifier"><code>microvm_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-expirationInMinutes"><code>expirationInMinutes</code></a>, <a href="#parameter-allowedPorts"><code>allowedPorts</code></a></td>
    <td></td>
    <td>Creates an authentication token for accessing a running MicroVM. The token grants access to the specified ports on the MicroVM endpoint.</td>
</tr>
<tr>
    <td><a href="#create_microvm_shell_auth_token"><CopyableCode code="create_microvm_shell_auth_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-microvm_identifier"><code>microvm_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-expirationInMinutes"><code>expirationInMinutes</code></a></td>
    <td></td>
    <td>Creates a shell authentication token for interactive shell access to a running MicroVM. The MicroVM must have been run with the SHELL_INGRESS network connector attached.</td>
</tr>
<tr>
    <td><a href="#terminate_microvm"><CopyableCode code="terminate_microvm" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-microvm_identifier"><code>microvm_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates a MicroVM. This operation is idempotent; terminating a MicroVM that has already been terminated succeeds without error.</td>
</tr>
<tr>
    <td><a href="#suspend_microvm"><CopyableCode code="suspend_microvm" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-microvm_identifier"><code>microvm_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Suspends a running MicroVM, preserving its full memory and disk state. The MicroVM transitions through SUSPENDING to SUSPENDED. To restore, call ResumeMicrovm or send traffic to the endpoint if autoResumeEnabled is true.</td>
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
<tr id="parameter-microvm_identifier">
    <td><CopyableCode code="microvm_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the MicroVM to suspend.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-imageIdentifier">
    <td><CopyableCode code="imageIdentifier" /></td>
    <td><code>string</code></td>
    <td>Optional filter to list only MicroVMs running the specified image.</td>
</tr>
<tr id="parameter-imageVersion">
    <td><CopyableCode code="imageVersion" /></td>
    <td><code>string</code></td>
    <td>Optional filter to list only MicroVMs running the specified image version.</td>
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
    defaultValue="get_microvm"
    values={[
        { label: 'get_microvm', value: 'get_microvm' },
        { label: 'list_microvms', value: 'list_microvms' }
    ]}
>
<TabItem value="get_microvm">

Retrieves the details of a specific MicroVM, including its state, endpoint, image information, and configuration. The state field is eventually consistent — determine readiness by connecting to the endpoint.

```sql
SELECT
egress_network_connectors,
endpoint,
execution_role_arn,
idle_policy,
image_arn,
image_version,
ingress_network_connectors,
maximum_duration_in_seconds,
microvm_id,
started_at,
state,
state_reason,
terminated_at
FROM aws.lambda_microvms.microvms
WHERE microvm_identifier = '{{ microvm_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_microvms">

Lists MicroVMs in the account with optional filtering by image and version. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
image_arn,
image_version,
microvm_id,
started_at,
state
FROM aws.lambda_microvms.microvms
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND imageIdentifier = '{{ imageIdentifier }}'
AND imageVersion = '{{ imageVersion }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_microvm_auth_token"
    values={[
        { label: 'create_microvm_auth_token', value: 'create_microvm_auth_token' },
        { label: 'create_microvm_shell_auth_token', value: 'create_microvm_shell_auth_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_microvm_auth_token">

Creates an authentication token for accessing a running MicroVM. The token grants access to the specified ports on the MicroVM endpoint.

```sql
INSERT INTO aws.lambda_microvms.microvms (
expirationInMinutes,
allowedPorts,
microvm_identifier,
region
)
SELECT 
{{ expirationInMinutes }} /* required */,
'{{ allowedPorts }}' /* required */,
'{{ microvm_identifier }}',
'{{ region }}'
RETURNING
auth_token
;
```
</TabItem>
<TabItem value="create_microvm_shell_auth_token">

Creates a shell authentication token for interactive shell access to a running MicroVM. The MicroVM must have been run with the SHELL_INGRESS network connector attached.

```sql
INSERT INTO aws.lambda_microvms.microvms (
expirationInMinutes,
microvm_identifier,
region
)
SELECT 
{{ expirationInMinutes }} /* required */,
'{{ microvm_identifier }}',
'{{ region }}'
RETURNING
auth_token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: microvms
  props:
    - name: microvm_identifier
      value: "{{ microvm_identifier }}"
      description: Required parameter for the microvms resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the microvms resource.
    - name: expirationInMinutes
      value: {{ expirationInMinutes }}
    - name: allowedPorts
      description: |
        A list of port specifications.
      value:
        - port: {{ port }}
          range:
            startPort: {{ startPort }}
            endPort: {{ endPort }}
          allPorts: "{{ allPorts }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_microvm"
    values={[
        { label: 'terminate_microvm', value: 'terminate_microvm' }
    ]}
>
<TabItem value="terminate_microvm">

Terminates a MicroVM. This operation is idempotent; terminating a MicroVM that has already been terminated succeeds without error.

```sql
DELETE FROM aws.lambda_microvms.microvms
WHERE microvm_identifier = '{{ microvm_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="suspend_microvm"
    values={[
        { label: 'suspend_microvm', value: 'suspend_microvm' }
    ]}
>
<TabItem value="suspend_microvm">

Suspends a running MicroVM, preserving its full memory and disk state. The MicroVM transitions through SUSPENDING to SUSPENDED. To restore, call ResumeMicrovm or send traffic to the endpoint if autoResumeEnabled is true.

```sql
EXEC aws.lambda_microvms.microvms.suspend_microvm 
@microvm_identifier='{{ microvm_identifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>

--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - emr_serverless
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_serverless.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/#-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The CPU architecture of an application. (ARM64, X86_64)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-serverless:.+:(\d&#123;12&#125;):\/applications\/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_start_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for an application to automatically start on job submission.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_stop_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for an application to automatically stop after a certain amount of time being idle.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the application run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="disk_encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration object that allows encrypting local disks.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_center_configuration" /></td>
    <td><code>object</code></td>
    <td>The IAM Identity Center configuration applied to enable trusted identity propagation.</td>
</tr>
<tr>
    <td><CopyableCode code="image_configuration" /></td>
    <td><code>object</code></td>
    <td>The applied image configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="initial_capacity" /></td>
    <td><code>object</code></td>
    <td>The initial capacity of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="interactive_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration to use to enable the different types of interactive use cases in an application.</td>
</tr>
<tr>
    <td><CopyableCode code="job_level_cost_allocation_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration object that enables job level cost allocation.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_capacity" /></td>
    <td><code>object</code></td>
    <td>The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration setting for monitoring.</td>
</tr>
<tr>
    <td><CopyableCode code="network_configuration" /></td>
    <td><code>object</code></td>
    <td>The network configuration for customer VPC connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release associated with the application. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_configuration" /></td>
    <td><code>array</code></td>
    <td>The Configuration specifications of an application. Each configuration consists of a classification and properties. You use this parameter when creating or updating an application. To see the runtimeConfiguration object of an application, run the GetApplication API operation.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduler_configuration" /></td>
    <td><code>object</code></td>
    <td>The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the application. (CREATING, CREATED, STARTING, STARTED, STOPPING, STOPPED, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_details" /></td>
    <td><code>string</code></td>
    <td>The state details of the application. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the application.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of application, such as Spark or Hive.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the application run was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_type_specifications" /></td>
    <td><code>object</code></td>
    <td>The specification applied to each worker type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/#-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The CPU architecture of an application. (ARM64, X86_64)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-serverless:.+:(\d&#123;12&#125;):\/applications\/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release associated with the application. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the application. (CREATING, CREATED, STARTING, STARTED, STOPPING, STOPPED, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_details" /></td>
    <td><code>string</code></td>
    <td>The state details of the application. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of application, such as Spark or Hive.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the application was last updated.</td>
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
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays detailed information about a specified application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-states"><code>states</code></a></td>
    <td>Lists applications based on a set of parameters.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-releaseLabel"><code>releaseLabel</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates an application.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates a specified application. An application has to be in a stopped or created state in order to be updated.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an application. An application has to be in a stopped or created state in order to be deleted.</td>
</tr>
<tr>
    <td><a href="#cancel_job_run"><CopyableCode code="cancel_job_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-job_run_id"><code>job_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-shutdownGracePeriodInSeconds"><code>shutdownGracePeriodInSeconds</code></a></td>
    <td>Cancels a job run.</td>
</tr>
<tr>
    <td><a href="#start_job_run"><CopyableCode code="start_job_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a></td>
    <td></td>
    <td>Starts a job run.</td>
</tr>
<tr>
    <td><a href="#start_session"><CopyableCode code="start_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a></td>
    <td></td>
    <td>Creates and starts a new session on the specified application. The application must be in the STARTED state or have AutoStart enabled, and have interactive sessions enabled. This operation is supported for EMR release 7.13.0 and later.</td>
</tr>
<tr>
    <td><a href="#start_application"><CopyableCode code="start_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a specified application and initializes initial capacity if configured.</td>
</tr>
<tr>
    <td><a href="#stop_application"><CopyableCode code="stop_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application to stop.</td>
</tr>
<tr id="parameter-job_run_id">
    <td><CopyableCode code="job_run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run to cancel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of applications that can be listed.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of application results.</td>
</tr>
<tr id="parameter-shutdownGracePeriodInSeconds">
    <td><CopyableCode code="shutdownGracePeriodInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration in seconds to wait before forcefully terminating the job after cancellation is requested.</td>
</tr>
<tr id="parameter-states">
    <td><CopyableCode code="states" /></td>
    <td><code>array</code></td>
    <td>An optional filter for application states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Displays detailed information about a specified application.

```sql
SELECT
name,
application_id,
architecture,
arn,
auto_start_configuration,
auto_stop_configuration,
created_at,
disk_encryption_configuration,
identity_center_configuration,
image_configuration,
initial_capacity,
interactive_configuration,
job_level_cost_allocation_configuration,
maximum_capacity,
monitoring_configuration,
network_configuration,
release_label,
runtime_configuration,
scheduler_configuration,
state,
state_details,
tags,
type_,
updated_at,
worker_type_specifications
FROM aws.emr_serverless.applications
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists applications based on a set of parameters.

```sql
SELECT
id,
name,
architecture,
arn,
created_at,
release_label,
state,
state_details,
type_,
updated_at
FROM aws.emr_serverless.applications
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND states = '{{ states }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates an application.

```sql
INSERT INTO aws.emr_serverless.applications (
name,
releaseLabel,
type,
clientToken,
initialCapacity,
maximumCapacity,
tags,
autoStartConfiguration,
autoStopConfiguration,
networkConfiguration,
architecture,
imageConfiguration,
workerTypeSpecifications,
runtimeConfiguration,
monitoringConfiguration,
diskEncryptionConfiguration,
interactiveConfiguration,
schedulerConfiguration,
identityCenterConfiguration,
jobLevelCostAllocationConfiguration,
region
)
SELECT 
'{{ name }}',
'{{ releaseLabel }}' /* required */,
'{{ type }}' /* required */,
'{{ clientToken }}' /* required */,
'{{ initialCapacity }}',
'{{ maximumCapacity }}',
'{{ tags }}',
'{{ autoStartConfiguration }}',
'{{ autoStopConfiguration }}',
'{{ networkConfiguration }}',
'{{ architecture }}',
'{{ imageConfiguration }}',
'{{ workerTypeSpecifications }}',
'{{ runtimeConfiguration }}',
'{{ monitoringConfiguration }}',
'{{ diskEncryptionConfiguration }}',
'{{ interactiveConfiguration }}',
'{{ schedulerConfiguration }}',
'{{ identityCenterConfiguration }}',
'{{ jobLevelCostAllocationConfiguration }}',
'{{ region }}'
RETURNING
name,
application_id,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: name
      value: "{{ name }}"
    - name: releaseLabel
      value: "{{ releaseLabel }}"
    - name: type
      value: "{{ type }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: initialCapacity
      value: "{{ initialCapacity }}"
    - name: maximumCapacity
      description: |
        The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.
      value:
        cpu: "{{ cpu }}"
        memory: "{{ memory }}"
        disk: "{{ disk }}"
    - name: tags
      value: "{{ tags }}"
    - name: autoStartConfiguration
      description: |
        The configuration for an application to automatically start on job submission.
      value:
        enabled: {{ enabled }}
    - name: autoStopConfiguration
      description: |
        The configuration for an application to automatically stop after a certain amount of time being idle.
      value:
        enabled: {{ enabled }}
        idleTimeoutMinutes: {{ idleTimeoutMinutes }}
    - name: networkConfiguration
      description: |
        The network configuration for customer VPC connectivity.
      value:
        subnetIds:
          - "{{ subnetIds }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
    - name: architecture
      value: "{{ architecture }}"
      valid_values: ['ARM64', 'X86_64']
    - name: imageConfiguration
      description: |
        The image configuration.
      value:
        imageUri: "{{ imageUri }}"
        applicationLevelDigestResolution: {{ applicationLevelDigestResolution }}
    - name: workerTypeSpecifications
      value: "{{ workerTypeSpecifications }}"
    - name: runtimeConfiguration
      value:
        - classification: "{{ classification }}"
          properties_: "{{ properties_ }}"
          configurations: "{{ configurations }}"
    - name: monitoringConfiguration
      description: |
        The configuration setting for monitoring.
      value:
        s3MonitoringConfiguration:
          logUri: "{{ logUri }}"
          encryptionKeyArn: "{{ encryptionKeyArn }}"
        managedPersistenceMonitoringConfiguration:
          enabled: {{ enabled }}
          encryptionKeyArn: "{{ encryptionKeyArn }}"
        cloudWatchLoggingConfiguration:
          enabled: {{ enabled }}
          logGroupName: "{{ logGroupName }}"
          logStreamNamePrefix: "{{ logStreamNamePrefix }}"
          encryptionKeyArn: "{{ encryptionKeyArn }}"
          logTypes: "{{ logTypes }}"
        prometheusMonitoringConfiguration:
          remoteWriteUrl: "{{ remoteWriteUrl }}"
    - name: diskEncryptionConfiguration
      description: |
        The configuration object that allows encrypting local disks.
      value:
        encryptionContext: "{{ encryptionContext }}"
        encryptionKeyArn: "{{ encryptionKeyArn }}"
    - name: interactiveConfiguration
      description: |
        The configuration to use to enable the different types of interactive use cases in an application.
      value:
        studioEnabled: {{ studioEnabled }}
        livyEndpointEnabled: {{ livyEndpointEnabled }}
        sessionEnabled: {{ sessionEnabled }}
    - name: schedulerConfiguration
      description: |
        The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.
      value:
        queueTimeoutMinutes: {{ queueTimeoutMinutes }}
        maxConcurrentRuns: {{ maxConcurrentRuns }}
    - name: identityCenterConfiguration
      description: |
        The IAM Identity Center Configuration accepts the Identity Center instance parameter required to enable trusted identity propagation. This configuration allows identity propagation between integrated services and the Identity Center instance.
      value:
        identityCenterInstanceArn: "{{ identityCenterInstanceArn }}"
        userBackgroundSessionsEnabled: {{ userBackgroundSessionsEnabled }}
    - name: jobLevelCostAllocationConfiguration
      description: |
        The configuration object that enables job level cost allocation.
      value:
        enabled: {{ enabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates a specified application. An application has to be in a stopped or created state in order to be updated.

```sql
UPDATE aws.emr_serverless.applications
SET 
clientToken = '{{ clientToken }}',
initialCapacity = '{{ initialCapacity }}',
maximumCapacity = '{{ maximumCapacity }}',
autoStartConfiguration = '{{ autoStartConfiguration }}',
autoStopConfiguration = '{{ autoStopConfiguration }}',
networkConfiguration = '{{ networkConfiguration }}',
architecture = '{{ architecture }}',
imageConfiguration = '{{ imageConfiguration }}',
workerTypeSpecifications = '{{ workerTypeSpecifications }}',
interactiveConfiguration = '{{ interactiveConfiguration }}',
releaseLabel = '{{ releaseLabel }}',
runtimeConfiguration = '{{ runtimeConfiguration }}',
monitoringConfiguration = '{{ monitoringConfiguration }}',
diskEncryptionConfiguration = '{{ diskEncryptionConfiguration }}',
schedulerConfiguration = '{{ schedulerConfiguration }}',
identityCenterConfiguration = '{{ identityCenterConfiguration }}',
jobLevelCostAllocationConfiguration = '{{ jobLevelCostAllocationConfiguration }}'
WHERE 
application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
application;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes an application. An application has to be in a stopped or created state in order to be deleted.

```sql
DELETE FROM aws.emr_serverless.applications
WHERE application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_job_run"
    values={[
        { label: 'cancel_job_run', value: 'cancel_job_run' },
        { label: 'start_job_run', value: 'start_job_run' },
        { label: 'start_session', value: 'start_session' },
        { label: 'start_application', value: 'start_application' },
        { label: 'stop_application', value: 'stop_application' }
    ]}
>
<TabItem value="cancel_job_run">

Cancels a job run.

```sql
EXEC aws.emr_serverless.applications.cancel_job_run 
@application_id='{{ application_id }}' --required, 
@job_run_id='{{ job_run_id }}' --required, 
@region='{{ region }}' --required, 
@shutdownGracePeriodInSeconds='{{ shutdownGracePeriodInSeconds }}'
;
```
</TabItem>
<TabItem value="start_job_run">

Starts a job run.

```sql
EXEC aws.emr_serverless.applications.start_job_run 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"executionRoleArn": "{{ executionRoleArn }}", 
"executionIamPolicy": "{{ executionIamPolicy }}", 
"jobDriver": "{{ jobDriver }}", 
"configurationOverrides": "{{ configurationOverrides }}", 
"tags": "{{ tags }}", 
"executionTimeoutMinutes": {{ executionTimeoutMinutes }}, 
"name": "{{ name }}", 
"mode": "{{ mode }}", 
"retryPolicy": "{{ retryPolicy }}"
}'
;
```
</TabItem>
<TabItem value="start_session">

Creates and starts a new session on the specified application. The application must be in the STARTED state or have AutoStart enabled, and have interactive sessions enabled. This operation is supported for EMR release 7.13.0 and later.

```sql
EXEC aws.emr_serverless.applications.start_session 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"executionRoleArn": "{{ executionRoleArn }}", 
"configurationOverrides": "{{ configurationOverrides }}", 
"tags": "{{ tags }}", 
"idleTimeoutMinutes": {{ idleTimeoutMinutes }}, 
"name": "{{ name }}"
}'
;
```
</TabItem>
<TabItem value="start_application">

Starts a specified application and initializes initial capacity if configured.

```sql
EXEC aws.emr_serverless.applications.start_application 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_application">

Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.

```sql
EXEC aws.emr_serverless.applications.stop_application 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>

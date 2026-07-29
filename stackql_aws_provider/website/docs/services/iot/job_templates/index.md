--- 
title: job_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - job_templates
  - iot
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

Creates, updates, deletes, gets or lists a <code>job_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.job_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job_template"
    values={[
        { label: 'describe_job_template', value: 'describe_job_template' },
        { label: 'list_job_templates', value: 'list_job_templates' }
    ]}
>
<TabItem value="describe_job_template">

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
    <td><CopyableCode code="abort_config" /></td>
    <td><code>object</code></td>
    <td>The criteria that determine when and how a job abort takes place.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in seconds since the epoch, when the job template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the job template. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination_package_versions" /></td>
    <td><code>array</code></td>
    <td>The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. The package version must be in either the Published or Deprecated state when the job deploys. For more information, see Package version lifecycle. Note:The following Length Constraints relates to a single ARN. Up to 25 package version ARNs are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="document" /></td>
    <td><code>string</code></td>
    <td>The job document.</td>
</tr>
<tr>
    <td><CopyableCode code="document_source" /></td>
    <td><code>string</code></td>
    <td>An S3 link to the job document.</td>
</tr>
<tr>
    <td><CopyableCode code="job_executions_retry_config" /></td>
    <td><code>object</code></td>
    <td>The configuration that determines how many retries are allowed for each failure type for a job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_executions_rollout_config" /></td>
    <td><code>object</code></td>
    <td>Allows you to create a staged rollout of a job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_template_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the job template. (pattern: &lt;code&gt;^arn:&#91;!-~&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_template_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the job template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_windows" /></td>
    <td><code>array</code></td>
    <td>Allows you to configure an optional maintenance window for the rollout of a job document to all devices in the target group for a job.</td>
</tr>
<tr>
    <td><CopyableCode code="presigned_url_config" /></td>
    <td><code>object</code></td>
    <td>Configuration for pre-signed S3 URLs.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_config" /></td>
    <td><code>object</code></td>
    <td>Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to IN_PROGRESS. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to TIMED_OUT.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_job_templates">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in seconds since the epoch, when the job template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the job template. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_template_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the job template. (pattern: &lt;code&gt;^arn:&#91;!-~&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_template_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the job template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_job_template"><CopyableCode code="describe_job_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_template_id"><code>job_template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a job template.</td>
</tr>
<tr>
    <td><a href="#list_job_templates"><CopyableCode code="list_job_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of job templates. Requires permission to access the ListJobTemplates action.</td>
</tr>
<tr>
    <td><a href="#create_job_template"><CopyableCode code="create_job_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-job_template_id"><code>job_template_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Creates a job template. Requires permission to access the CreateJobTemplate action.</td>
</tr>
<tr>
    <td><a href="#delete_job_template"><CopyableCode code="delete_job_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-job_template_id"><code>job_template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified job template.</td>
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
<tr id="parameter-job_template_id">
    <td><CopyableCode code="job_template_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the job template to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the list.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to return the next set of results in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_job_template"
    values={[
        { label: 'describe_job_template', value: 'describe_job_template' },
        { label: 'list_job_templates', value: 'list_job_templates' }
    ]}
>
<TabItem value="describe_job_template">

Returns information about a job template.

```sql
SELECT
abort_config,
created_at,
description,
destination_package_versions,
document,
document_source,
job_executions_retry_config,
job_executions_rollout_config,
job_template_arn,
job_template_id,
maintenance_windows,
presigned_url_config,
timeout_config
FROM aws.iot.job_templates
WHERE job_template_id = '{{ job_template_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_job_templates">

Returns a list of job templates. Requires permission to access the ListJobTemplates action.

```sql
SELECT
created_at,
description,
job_template_arn,
job_template_id
FROM aws.iot.job_templates
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job_template"
    values={[
        { label: 'create_job_template', value: 'create_job_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job_template">

Creates a job template. Requires permission to access the CreateJobTemplate action.

```sql
INSERT INTO aws.iot.job_templates (
jobArn,
documentSource,
document,
description,
presignedUrlConfig,
jobExecutionsRolloutConfig,
abortConfig,
timeoutConfig,
tags,
jobExecutionsRetryConfig,
maintenanceWindows,
destinationPackageVersions,
job_template_id,
region
)
SELECT 
'{{ jobArn }}',
'{{ documentSource }}',
'{{ document }}',
'{{ description }}' /* required */,
'{{ presignedUrlConfig }}',
'{{ jobExecutionsRolloutConfig }}',
'{{ abortConfig }}',
'{{ timeoutConfig }}',
'{{ tags }}',
'{{ jobExecutionsRetryConfig }}',
'{{ maintenanceWindows }}',
'{{ destinationPackageVersions }}',
'{{ job_template_id }}',
'{{ region }}'
RETURNING
job_template_arn,
job_template_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: job_templates
  props:
    - name: job_template_id
      value: "{{ job_template_id }}"
      description: Required parameter for the job_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the job_templates resource.
    - name: jobArn
      value: "{{ jobArn }}"
    - name: documentSource
      value: "{{ documentSource }}"
    - name: document
      value: "{{ document }}"
    - name: description
      value: "{{ description }}"
    - name: presignedUrlConfig
      description: |
        Configuration for pre-signed S3 URLs.
      value:
        roleArn: "{{ roleArn }}"
        expiresInSec: {{ expiresInSec }}
    - name: jobExecutionsRolloutConfig
      description: |
        Allows you to create a staged rollout of a job.
      value:
        maximumPerMinute: {{ maximumPerMinute }}
        exponentialRate:
          baseRatePerMinute: {{ baseRatePerMinute }}
          incrementFactor: {{ incrementFactor }}
          rateIncreaseCriteria:
            numberOfNotifiedThings: {{ numberOfNotifiedThings }}
            numberOfSucceededThings: {{ numberOfSucceededThings }}
    - name: abortConfig
      description: |
        The criteria that determine when and how a job abort takes place.
      value:
        criteriaList:
          - failureType: "{{ failureType }}"
            action: "{{ action }}"
            thresholdPercentage: {{ thresholdPercentage }}
            minNumberOfExecutedThings: {{ minNumberOfExecutedThings }}
    - name: timeoutConfig
      description: |
        Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to IN_PROGRESS. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to TIMED_OUT.
      value:
        inProgressTimeoutInMinutes: {{ inProgressTimeoutInMinutes }}
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: jobExecutionsRetryConfig
      description: |
        The configuration that determines how many retries are allowed for each failure type for a job.
      value:
        criteriaList:
          - failureType: "{{ failureType }}"
            numberOfRetries: {{ numberOfRetries }}
    - name: maintenanceWindows
      value:
        - startTime: "{{ startTime }}"
          durationInMinutes: {{ durationInMinutes }}
    - name: destinationPackageVersions
      value:
        - "{{ destinationPackageVersions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job_template"
    values={[
        { label: 'delete_job_template', value: 'delete_job_template' }
    ]}
>
<TabItem value="delete_job_template">

Deletes the specified job template.

```sql
DELETE FROM aws.iot.job_templates
WHERE job_template_id = '{{ job_template_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

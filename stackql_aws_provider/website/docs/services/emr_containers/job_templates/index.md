--- 
title: job_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - job_templates
  - emr_containers
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_containers.job_templates" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job template. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job template. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the job template. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-containers:.+:(\d&#123;12&#125;):\/jobtemplates\/&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the job template. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="decryptionError" /></td>
    <td><code>string</code></td>
    <td>The error message in case the decryption of job template fails. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobTemplateData" /></td>
    <td><code>object</code></td>
    <td>The values of StartJobRun API requests used in job runs started using the job template.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The KMS key ARN used to encrypt the job template. (pattern: &lt;code&gt;^(arn:(aws&#91;a-zA-Z0-9-&#93;*):kms:.+:(\d&#123;12&#125;)?:key\/&#91;(0-9a-zA-Z)-?&#93;+|\$\&#123;&#91;a-zA-Z&#93;\w*\&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the job template.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job template. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job template. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the job template. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-containers:.+:(\d&#123;12&#125;):\/jobtemplates\/&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the job template. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="decryptionError" /></td>
    <td><code>string</code></td>
    <td>The error message in case the decryption of job template fails. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobTemplateData" /></td>
    <td><code>object</code></td>
    <td>The values of StartJobRun API requests used in job runs started using the job template.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The KMS key ARN used to encrypt the job template. (pattern: &lt;code&gt;^(arn:(aws&#91;a-zA-Z0-9-&#93;*):kms:.+:(\d&#123;12&#125;)?:key\/&#91;(0-9a-zA-Z)-?&#93;+|\$\&#123;&#91;a-zA-Z&#93;\w*\&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the job template.</td>
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
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.</td>
</tr>
<tr>
    <td><a href="#list_job_templates"><CopyableCode code="list_job_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-createdAfter"><code>createdAfter</code></a>, <a href="#parameter-createdBefore"><code>createdBefore</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.</td>
</tr>
<tr>
    <td><a href="#create_job_template"><CopyableCode code="create_job_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-jobTemplateData"><code>jobTemplateData</code></a></td>
    <td></td>
    <td>Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.</td>
</tr>
<tr>
    <td><a href="#delete_job_template"><CopyableCode code="delete_job_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.</td>
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
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job template that will be deleted.</td>
</tr>
<tr id="parameter-createdAfter">
    <td><CopyableCode code="createdAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time after which the job templates were created.</td>
</tr>
<tr id="parameter-createdBefore">
    <td><CopyableCode code="createdBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time before which the job templates were created.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of job templates that can be listed.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of job templates to return.</td>
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

Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

```sql
SELECT
id,
name,
arn,
createdAt,
createdBy,
decryptionError,
jobTemplateData,
kmsKeyArn,
tags
FROM aws.emr_containers.job_templates
WHERE template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_job_templates">

Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

```sql
SELECT
id,
name,
arn,
createdAt,
createdBy,
decryptionError,
jobTemplateData,
kmsKeyArn,
tags
FROM aws.emr_containers.job_templates
WHERE region = '{{ region }}' -- required
AND createdAfter = '{{ createdAfter }}'
AND createdBefore = '{{ createdBefore }}'
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

Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

```sql
INSERT INTO aws.emr_containers.job_templates (
name,
clientToken,
jobTemplateData,
tags,
kmsKeyArn,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ clientToken }}' /* required */,
'{{ jobTemplateData }}' /* required */,
'{{ tags }}',
'{{ kmsKeyArn }}',
'{{ region }}'
RETURNING
id,
name,
arn,
createdAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: job_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the job_templates resource.
    - name: name
      value: "{{ name }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: jobTemplateData
      description: |
        The values of StartJobRun API requests used in job runs started using the job template.
      value:
        executionRoleArn: "{{ executionRoleArn }}"
        releaseLabel: "{{ releaseLabel }}"
        configurationOverrides:
          applicationConfiguration:
            - classification: "{{ classification }}"
              properties_: "{{ properties_ }}"
              configurations: "{{ configurations }}"
          monitoringConfiguration:
            persistentAppUI: "{{ persistentAppUI }}"
            cloudWatchMonitoringConfiguration:
              logGroupName: "{{ logGroupName }}"
              logStreamNamePrefix: "{{ logStreamNamePrefix }}"
            s3MonitoringConfiguration:
              logUri: "{{ logUri }}"
        jobDriver:
          sparkSubmitJobDriver:
            entryPoint: "{{ entryPoint }}"
            entryPointArguments:
              - "{{ entryPointArguments }}"
            sparkSubmitParameters: "{{ sparkSubmitParameters }}"
          sparkSqlJobDriver:
            entryPoint: "{{ entryPoint }}"
            sparkSqlParameters: "{{ sparkSqlParameters }}"
        parameterConfiguration: "{{ parameterConfiguration }}"
        jobTags: "{{ jobTags }}"
    - name: tags
      value: "{{ tags }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
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

Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

```sql
DELETE FROM aws.emr_containers.job_templates
WHERE template_id = '{{ template_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

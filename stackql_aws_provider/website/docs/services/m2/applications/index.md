--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - m2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.applications" /></td></tr>
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
    <td>The unique identifier of the application. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;|):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the application. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployedVersion" /></td>
    <td><code>object</code></td>
    <td>The version of the application that is deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="engineType" /></td>
    <td><code>string</code></td>
    <td>The type of the target platform for the application. (microfocus, bluage)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the runtime environment where you want to deploy the application. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a customer managed key.</td>
</tr>
<tr>
    <td><CopyableCode code="lastStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when you last started the application. Null until the application runs for the first time.</td>
</tr>
<tr>
    <td><CopyableCode code="latestVersion" /></td>
    <td><code>object</code></td>
    <td>The latest version of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="listenerArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Name (ARN) for the network load balancer listener created in your Amazon Web Services account. Amazon Web Services Mainframe Modernization creates this listener for you the first time you deploy an application.</td>
</tr>
<tr>
    <td><CopyableCode code="listenerPorts" /></td>
    <td><code>array</code></td>
    <td>The port associated with the network load balancer listener created in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancerDnsName" /></td>
    <td><code>string</code></td>
    <td>The public DNS name of the load balancer created in your Amazon Web Services account. (pattern: &lt;code&gt;^\S&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logGroups" /></td>
    <td><code>array</code></td>
    <td>The list of log summaries. Each log summary includes the log type as well as the log group identifier. These are CloudWatch logs. Amazon Web Services Mainframe Modernization pushes the application log to CloudWatch under the customer's account.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role associated with the application. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;|):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the application. (Creating, Created, Available, Ready, Starting, Running, Stopping, Stopped, Failed, Deleting, Deleting From Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the reported status.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of tags associated with the application.</td>
</tr>
<tr>
    <td><CopyableCode code="targetGroupArns" /></td>
    <td><code>array</code></td>
    <td>Returns the Amazon Resource Names (ARNs) of the target groups that are attached to the network load balancer.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;|):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates either an ongoing deployment or if the application has ever deployed successfully. (Deploying, Deployed)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="engineType" /></td>
    <td><code>string</code></td>
    <td>The type of the target platform for this application. (microfocus, bluage)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the runtime environment that hosts this application. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when you last started the application. Null until the application runs for the first time.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role associated with the application. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;|):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the application. (Creating, Created, Available, Ready, Starting, Running, Stopping, Stopped, Failed, Deleting, Deleting From Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="versionStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the latest version of the application. (Creating, Available, Failed)</td>
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
    <td>Describes the details of a specific application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-names"><code>names</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a>, <a href="#parameter-engineType"><code>engineType</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new application with given parameters. Requires an existing runtime environment and application definition file.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-currentApplicationVersion"><code>currentApplicationVersion</code></a></td>
    <td></td>
    <td>Updates an application and creates a new version.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific application. You cannot delete a running application.</td>
</tr>
<tr>
    <td><a href="#cancel_batch_job_execution"><CopyableCode code="cancel_batch_job_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-execution_id"><code>execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels the running of a specific batch job execution.</td>
</tr>
<tr>
    <td><a href="#start_application"><CopyableCode code="start_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts an application that is currently stopped.</td>
</tr>
<tr>
    <td><a href="#start_batch_job"><CopyableCode code="start_batch_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-batchJobIdentifier"><code>batchJobIdentifier</code></a></td>
    <td></td>
    <td>Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.</td>
</tr>
<tr>
    <td><a href="#stop_application"><CopyableCode code="stop_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a running application.</td>
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
    <td>The unique identifier of the application you want to stop.</td>
</tr>
<tr id="parameter-execution_id">
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the batch job execution.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-environmentId">
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the runtime environment where the applications are deployed.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of applications to return.</td>
</tr>
<tr id="parameter-names">
    <td><CopyableCode code="names" /></td>
    <td><code>array</code></td>
    <td>The names of the applications.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to control the number of applications displayed in the list.</td>
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

Describes the details of a specific application.

```sql
SELECT
name,
applicationArn,
applicationId,
creationTime,
deployedVersion,
description,
engineType,
environmentId,
kmsKeyId,
lastStartTime,
latestVersion,
listenerArns,
listenerPorts,
loadBalancerDnsName,
logGroups,
roleArn,
status,
statusReason,
tags,
targetGroupArns
FROM aws.m2.applications
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.

```sql
SELECT
name,
applicationArn,
applicationId,
applicationVersion,
creationTime,
deploymentStatus,
description,
engineType,
environmentId,
lastStartTime,
roleArn,
status,
versionStatus
FROM aws.m2.applications
WHERE region = '{{ region }}' -- required
AND environmentId = '{{ environmentId }}'
AND maxResults = '{{ maxResults }}'
AND names = '{{ names }}'
AND nextToken = '{{ nextToken }}'
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

Creates a new application with given parameters. Requires an existing runtime environment and application definition file.

```sql
INSERT INTO aws.m2.applications (
clientToken,
definition,
description,
engineType,
kmsKeyId,
name,
roleArn,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ definition }}' /* required */,
'{{ description }}',
'{{ engineType }}' /* required */,
'{{ kmsKeyId }}',
'{{ name }}' /* required */,
'{{ roleArn }}',
'{{ tags }}',
'{{ region }}'
RETURNING
applicationArn,
applicationId,
applicationVersion
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
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A client token is a unique, case-sensitive string of up to 128 ASCII characters with ASCII values of 33-126 inclusive. It is generated by the client to ensure idempotent operations, allowing safe retries without unintended side effects.
    - name: definition
      description: |
        The application definition for a particular application.
      value:
        content: "{{ content }}"
        s3Location: "{{ s3Location }}"
    - name: description
      value: "{{ description }}"
    - name: engineType
      value: "{{ engineType }}"
      valid_values: ['microfocus', 'bluage']
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: name
      value: "{{ name }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value: "{{ tags }}"
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

Updates an application and creates a new version.

```sql
UPDATE aws.m2.applications
SET 
currentApplicationVersion = {{ currentApplicationVersion }},
definition = '{{ definition }}',
description = '{{ description }}'
WHERE 
application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
AND currentApplicationVersion = '{{ currentApplicationVersion }}' --required
RETURNING
applicationVersion;
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

Deletes a specific application. You cannot delete a running application.

```sql
DELETE FROM aws.m2.applications
WHERE application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_batch_job_execution"
    values={[
        { label: 'cancel_batch_job_execution', value: 'cancel_batch_job_execution' },
        { label: 'start_application', value: 'start_application' },
        { label: 'start_batch_job', value: 'start_batch_job' },
        { label: 'stop_application', value: 'stop_application' }
    ]}
>
<TabItem value="cancel_batch_job_execution">

Cancels the running of a specific batch job execution.

```sql
EXEC aws.m2.applications.cancel_batch_job_execution 
@application_id='{{ application_id }}' --required, 
@execution_id='{{ execution_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"authSecretsManagerArn": "{{ authSecretsManagerArn }}"
}'
;
```
</TabItem>
<TabItem value="start_application">

Starts an application that is currently stopped.

```sql
EXEC aws.m2.applications.start_application 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_batch_job">

Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.

```sql
EXEC aws.m2.applications.start_batch_job 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"authSecretsManagerArn": "{{ authSecretsManagerArn }}", 
"batchJobIdentifier": "{{ batchJobIdentifier }}", 
"jobParams": "{{ jobParams }}"
}'
;
```
</TabItem>
<TabItem value="stop_application">

Stops a running application.

```sql
EXEC aws.m2.applications.stop_application 
@application_id='{{ application_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"forceStop": {{ forceStop }}
}'
;
```
</TabItem>
</Tabs>

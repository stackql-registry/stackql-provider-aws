--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - ssm_sap
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_sap.applications" /></td></tr>
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
    <td><CopyableCode code="Application" /></td>
    <td><code>object</code></td>
    <td>Returns all of the metadata of an application registered with AWS Systems Manager for SAP.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags of a registered application.</td>
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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application. (pattern: &lt;code&gt;arn:(.+:)&#123;2,4&#125;.+$|^arn:(.+:)&#123;1,3&#125;.+\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DiscoveryStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the latest discovery. (SUCCESS, REGISTRATION_FAILED, REFRESH_FAILED, REGISTERING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application. (pattern: &lt;code&gt;&#91;\w\d\.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags on the application.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of the application. (HANA, SAP_ABAP)</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the applications registered with AWS Systems Manager for SAP.</td>
</tr>
<tr>
    <td><a href="#register_application"><CopyableCode code="register_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationId"><code>ApplicationId</code></a>, <a href="#parameter-ApplicationType"><code>ApplicationType</code></a>, <a href="#parameter-Instances"><code>Instances</code></a></td>
    <td></td>
    <td>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2. AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions. Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</td>
</tr>
<tr>
    <td><a href="#update_application_settings"><CopyableCode code="update_application_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationId"><code>ApplicationId</code></a></td>
    <td></td>
    <td>Updates the settings of an application registered with AWS Systems Manager for SAP.</td>
</tr>
<tr>
    <td><a href="#deregister_application"><CopyableCode code="deregister_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.</td>
</tr>
<tr>
    <td><a href="#start_application"><CopyableCode code="start_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationId"><code>ApplicationId</code></a></td>
    <td></td>
    <td>Request is an operation which starts an application. Parameter ApplicationId is required.</td>
</tr>
<tr>
    <td><a href="#start_application_refresh"><CopyableCode code="start_application_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationId"><code>ApplicationId</code></a></td>
    <td></td>
    <td>Refreshes a registered application.</td>
</tr>
<tr>
    <td><a href="#start_configuration_checks"><CopyableCode code="start_configuration_checks" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationId"><code>ApplicationId</code></a></td>
    <td></td>
    <td>Initiates configuration check operations against a specified application.</td>
</tr>
<tr>
    <td><a href="#stop_application"><CopyableCode code="stop_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationId"><code>ApplicationId</code></a></td>
    <td></td>
    <td>Request is an operation to stop an application. Parameter ApplicationId is required. Parameters StopConnectedEntity and IncludeEc2InstanceShutdown are optional.</td>
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
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.

```sql
SELECT
Application,
Tags
FROM aws.ssm_sap.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists all the applications registered with AWS Systems Manager for SAP.

```sql
SELECT
Arn,
DiscoveryStatus,
Id,
Tags,
Type
FROM aws.ssm_sap.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_application"
    values={[
        { label: 'register_application', value: 'register_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_application">

Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2. AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions. Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.

```sql
INSERT INTO aws.ssm_sap.applications (
ApplicationId,
ApplicationType,
Instances,
SapInstanceNumber,
Sid,
Tags,
Credentials,
DatabaseArn,
ComponentsInfo,
region
)
SELECT 
'{{ ApplicationId }}' /* required */,
'{{ ApplicationType }}' /* required */,
'{{ Instances }}' /* required */,
'{{ SapInstanceNumber }}',
'{{ Sid }}',
'{{ Tags }}',
'{{ Credentials }}',
'{{ DatabaseArn }}',
'{{ ComponentsInfo }}',
'{{ region }}'
RETURNING
Application,
OperationId
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
    - name: ApplicationId
      value: "{{ ApplicationId }}"
    - name: ApplicationType
      value: "{{ ApplicationType }}"
      valid_values: ['HANA', 'SAP_ABAP']
    - name: Instances
      value:
        - "{{ Instances }}"
    - name: SapInstanceNumber
      value: "{{ SapInstanceNumber }}"
    - name: Sid
      value: "{{ Sid }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Credentials
      value:
        - DatabaseName: "{{ DatabaseName }}"
          CredentialType: "{{ CredentialType }}"
          SecretId: "{{ SecretId }}"
    - name: DatabaseArn
      value: "{{ DatabaseArn }}"
    - name: ComponentsInfo
      value:
        - ComponentType: "{{ ComponentType }}"
          Sid: "{{ Sid }}"
          Ec2InstanceId: "{{ Ec2InstanceId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application_settings"
    values={[
        { label: 'update_application_settings', value: 'update_application_settings' }
    ]}
>
<TabItem value="update_application_settings">

Updates the settings of an application registered with AWS Systems Manager for SAP.

```sql
UPDATE aws.ssm_sap.applications
SET 
ApplicationId = '{{ ApplicationId }}',
CredentialsToAddOrUpdate = '{{ CredentialsToAddOrUpdate }}',
CredentialsToRemove = '{{ CredentialsToRemove }}',
Backint = '{{ Backint }}',
DatabaseArn = '{{ DatabaseArn }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationId = '{{ ApplicationId }}' --required
RETURNING
Message,
OperationIds;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_application"
    values={[
        { label: 'deregister_application', value: 'deregister_application' }
    ]}
>
<TabItem value="deregister_application">

Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.

```sql
DELETE FROM aws.ssm_sap.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_application"
    values={[
        { label: 'start_application', value: 'start_application' },
        { label: 'start_application_refresh', value: 'start_application_refresh' },
        { label: 'start_configuration_checks', value: 'start_configuration_checks' },
        { label: 'stop_application', value: 'stop_application' }
    ]}
>
<TabItem value="start_application">

Request is an operation which starts an application. Parameter ApplicationId is required.

```sql
EXEC aws.ssm_sap.applications.start_application 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationId": "{{ ApplicationId }}"
}'
;
```
</TabItem>
<TabItem value="start_application_refresh">

Refreshes a registered application.

```sql
EXEC aws.ssm_sap.applications.start_application_refresh 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationId": "{{ ApplicationId }}"
}'
;
```
</TabItem>
<TabItem value="start_configuration_checks">

Initiates configuration check operations against a specified application.

```sql
EXEC aws.ssm_sap.applications.start_configuration_checks 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationId": "{{ ApplicationId }}", 
"ConfigurationCheckIds": "{{ ConfigurationCheckIds }}"
}'
;
```
</TabItem>
<TabItem value="stop_application">

Request is an operation to stop an application. Parameter ApplicationId is required. Parameters StopConnectedEntity and IncludeEc2InstanceShutdown are optional.

```sql
EXEC aws.ssm_sap.applications.stop_application 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationId": "{{ ApplicationId }}", 
"StopConnectedEntity": "{{ StopConnectedEntity }}", 
"IncludeEc2InstanceShutdown": {{ IncludeEc2InstanceShutdown }}
}'
;
```
</TabItem>
</Tabs>

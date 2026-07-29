--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - cloud9
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloud9.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_environments"
    values={[
        { label: 'describe_environments', value: 'describe_environments' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="describe_environments">

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
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>Information about the environments that are returned.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environments">

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
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The list of environment identifiers.</td>
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
    <td><a href="#describe_environments"><CopyableCode code="describe_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about Cloud9 development environments. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of Cloud9 development environment identifiers. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more" Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
</tr>
<tr>
    <td><a href="#create_environment_ec2"><CopyableCode code="create_environment_ec2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-instanceType"><code>instanceType</code></a>, <a href="#parameter-imageId"><code>imageId</code></a></td>
    <td></td>
    <td>Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
</tr>
<tr>
    <td><a href="#update_environment"><CopyableCode code="update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a></td>
    <td></td>
    <td>Changes the settings of an existing Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
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
    defaultValue="describe_environments"
    values={[
        { label: 'describe_environments', value: 'describe_environments' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="describe_environments">

Gets information about Cloud9 development environments. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
SELECT
environments
FROM aws.cloud9.environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

Gets a list of Cloud9 development environment identifiers. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more" Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
SELECT
environment_id
FROM aws.cloud9.environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_ec2"
    values={[
        { label: 'create_environment_ec2', value: 'create_environment_ec2' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_ec2">

Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
INSERT INTO aws.cloud9.environments (
name,
description,
clientRequestToken,
instanceType,
subnetId,
imageId,
automaticStopTimeMinutes,
ownerArn,
tags,
connectionType,
dryRun,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ clientRequestToken }}',
'{{ instanceType }}' /* required */,
'{{ subnetId }}',
'{{ imageId }}' /* required */,
{{ automaticStopTimeMinutes }},
'{{ ownerArn }}',
'{{ tags }}',
'{{ connectionType }}',
{{ dryRun }},
'{{ region }}'
RETURNING
environment_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the environment to create. This name is visible to other IAM users in the same Amazon Web Services account.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the environment to create.
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
      description: |
        A unique, case-sensitive string that helps Cloud9 to ensure this operation completes no more than one time. For more information, see Client Tokens in the Amazon EC2 API Reference.
    - name: instanceType
      value: "{{ instanceType }}"
      description: |
        The type of instance to connect to the environment (for example, t2.micro).
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The ID of the subnet in Amazon VPC that Cloud9 will use to communicate with the Amazon EC2 instance.
    - name: imageId
      value: "{{ imageId }}"
      description: |
        The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. To choose an AMI for the instance, you must specify a valid AMI alias or a valid Amazon EC2 Systems Manager (SSM) path. We recommend using Amazon Linux 2023 as the AMI to create your environment as it is fully supported. From December 16, 2024, Ubuntu 18.04 will be removed from the list of available imageIds for Cloud9. This change is necessary as Ubuntu 18.04 has ended standard support on May 31, 2023. This change will only affect direct API consumers, and not Cloud9 console users. Since Ubuntu 18.04 has ended standard support as of May 31, 2023, we recommend you choose Ubuntu 22.04. AMI aliases Amazon Linux 2: amazonlinux-2-x86_64 Amazon Linux 2023 (recommended): amazonlinux-2023-x86_64 Ubuntu 18.04: ubuntu-18.04-x86_64 Ubuntu 22.04: ubuntu-22.04-x86_64 SSM paths Amazon Linux 2: resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2-x86_64 Amazon Linux 2023 (recommended): resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2023-x86_64 Ubuntu 18.04: resolve:ssm:/aws/service/cloud9/amis/ubuntu-18.04-x86_64 Ubuntu 22.04: resolve:ssm:/aws/service/cloud9/amis/ubuntu-22.04-x86_64
    - name: automaticStopTimeMinutes
      value: {{ automaticStopTimeMinutes }}
      description: |
        The number of minutes until the running instance is shut down after the environment has last been used.
    - name: ownerArn
      value: "{{ ownerArn }}"
      description: |
        The Amazon Resource Name (ARN) of the environment owner. This ARN can be the ARN of any IAM principal. If this value is not specified, the ARN defaults to this environment's creator.
    - name: tags
      description: |
        An array of key-value pairs that will be associated with the new Cloud9 development environment.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: connectionType
      value: "{{ connectionType }}"
      description: |
        The connection type used for connecting to an Amazon EC2 environment. Valid values are CONNECT_SSH (default) and CONNECT_SSM (connected through Amazon EC2 Systems Manager). For more information, see Accessing no-ingress EC2 instances with Amazon EC2 Systems Manager in the Cloud9 User Guide.
      valid_values: ['CONNECT_SSH', 'CONNECT_SSM']
    - name: dryRun
      value: {{ dryRun }}
      description: |
        Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment"
    values={[
        { label: 'update_environment', value: 'update_environment' }
    ]}
>
<TabItem value="update_environment">

Changes the settings of an existing Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
UPDATE aws.cloud9.environments
SET 
environmentId = '{{ environmentId }}',
name = '{{ name }}',
description = '{{ description }}',
managedCredentialsAction = '{{ managedCredentialsAction }}'
WHERE 
region = '{{ region }}' --required
AND environmentId = '{{ environmentId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment"
    values={[
        { label: 'delete_environment', value: 'delete_environment' }
    ]}
>
<TabItem value="delete_environment">

Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
DELETE FROM aws.cloud9.environments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

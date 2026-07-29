--- 
title: dev_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - dev_endpoints
  - glue
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

Creates, updates, deletes, gets or lists a <code>dev_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dev_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.dev_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_dev_endpoints"
    values={[
        { label: 'batch_get_dev_endpoints', value: 'batch_get_dev_endpoints' },
        { label: 'get_dev_endpoint', value: 'get_dev_endpoint' },
        { label: 'get_dev_endpoints', value: 'get_dev_endpoints' }
    ]}
>
<TabItem value="batch_get_dev_endpoints">

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
    <td><CopyableCode code="dev_endpoints" /></td>
    <td><code>array</code></td>
    <td>A list of DevEndpoint definitions.</td>
</tr>
<tr>
    <td><CopyableCode code="dev_endpoints_not_found" /></td>
    <td><code>array</code></td>
    <td>A list of DevEndpoints not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_dev_endpoint">

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
    <td><CopyableCode code="arguments" /></td>
    <td><code>object</code></td>
    <td>A map of arguments used to configure the DevEndpoint. Valid arguments are: "--enable-glue-datacatalog": "" You can specify a version of Python support for development endpoints by using the Arguments parameter in the CreateDevEndpoint or UpdateDevEndpoint APIs. If no arguments are provided, the version defaults to Python 2.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Availability Zone where this DevEndpoint is located.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time at which this DevEndpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="extra_jars_s3_path" /></td>
    <td><code>string</code></td>
    <td>The path to one or more Java .jar files in an S3 bucket that should be loaded in your DevEndpoint. You can only use pure Java/Scala libraries with a DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="extra_python_libs_s3_path" /></td>
    <td><code>string</code></td>
    <td>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma. You can only use pure Python libraries with a DevEndpoint. Libraries that rely on C extensions, such as the pandas Python data analysis library, are not currently supported.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for a current failure in this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="glue_version" /></td>
    <td><code>string</code></td>
    <td>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Development endpoints that are created without specifying a Glue version default to Glue 0.9. You can specify a version of Python support for development endpoints by using the Arguments parameter in the CreateDevEndpoint or UpdateDevEndpoint APIs. If no arguments are provided, the version defaults to Python 2. (pattern: &lt;code&gt;^(\w+\.)+\w+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time at which this DevEndpoint was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_status" /></td>
    <td><code>string</code></td>
    <td>The status of the last update.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_workers" /></td>
    <td><code>integer</code></td>
    <td>The number of workers of a defined workerType that are allocated to the development endpoint. The maximum number of workers you can define are 299 for G.1X, and 149 for G.2X.</td>
</tr>
<tr>
    <td><CopyableCode code="private_address" /></td>
    <td><code>string</code></td>
    <td>A private IP address to access the DevEndpoint within a VPC if the DevEndpoint is created within one. The PrivateAddress field is present only when you create the DevEndpoint within your VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="public_address" /></td>
    <td><code>string</code></td>
    <td>The public IP address used by this DevEndpoint. The PublicAddress field is present only when you create a non-virtual private cloud (VPC) DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>The public key to be used by this DevEndpoint for authentication. This attribute is provided for backward compatibility because the recommended attribute to use is public keys.</td>
</tr>
<tr>
    <td><CopyableCode code="public_keys" /></td>
    <td><code>array</code></td>
    <td>A list of public keys to be used by the DevEndpoints for authentication. Using this attribute is preferred over a single public key because the public keys allow you to have a different private key per client. If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the UpdateDevEndpoint API operation with the public key content in the deletePublicKeys attribute, and the list of new keys in the addPublicKeys attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used in this DevEndpoint. (pattern: &lt;code&gt;arn:aws:iam::\d&#123;12&#125;:role/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration" /></td>
    <td><code>string</code></td>
    <td>The name of the SecurityConfiguration structure to be used with this DevEndpoint. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>array</code></td>
    <td>A list of security group identifiers used in this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The subnet ID for this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private cloud (VPC) used by this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_type" /></td>
    <td><code>string</code></td>
    <td>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X. For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker. For the G.1X worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs. For the G.2X worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs. Known issue: when a development endpoint is created with the G.2X WorkerType configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. (Standard, G.1X, G.2X, G.025X, G.4X, G.8X, Z.2X)</td>
</tr>
<tr>
    <td><CopyableCode code="yarn_endpoint_address" /></td>
    <td><code>string</code></td>
    <td>The YARN endpoint address used by this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="zeppelin_remote_spark_interpreter_port" /></td>
    <td><code>integer</code></td>
    <td>The Apache Zeppelin port for the remote Apache Spark interpreter.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_dev_endpoints">

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
    <td><CopyableCode code="arguments" /></td>
    <td><code>object</code></td>
    <td>A map of arguments used to configure the DevEndpoint. Valid arguments are: "--enable-glue-datacatalog": "" You can specify a version of Python support for development endpoints by using the Arguments parameter in the CreateDevEndpoint or UpdateDevEndpoint APIs. If no arguments are provided, the version defaults to Python 2.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Availability Zone where this DevEndpoint is located.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time at which this DevEndpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="extra_jars_s3_path" /></td>
    <td><code>string</code></td>
    <td>The path to one or more Java .jar files in an S3 bucket that should be loaded in your DevEndpoint. You can only use pure Java/Scala libraries with a DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="extra_python_libs_s3_path" /></td>
    <td><code>string</code></td>
    <td>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma. You can only use pure Python libraries with a DevEndpoint. Libraries that rely on C extensions, such as the pandas Python data analysis library, are not currently supported.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for a current failure in this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="glue_version" /></td>
    <td><code>string</code></td>
    <td>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Development endpoints that are created without specifying a Glue version default to Glue 0.9. You can specify a version of Python support for development endpoints by using the Arguments parameter in the CreateDevEndpoint or UpdateDevEndpoint APIs. If no arguments are provided, the version defaults to Python 2. (pattern: &lt;code&gt;^(\w+\.)+\w+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time at which this DevEndpoint was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_status" /></td>
    <td><code>string</code></td>
    <td>The status of the last update.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_workers" /></td>
    <td><code>integer</code></td>
    <td>The number of workers of a defined workerType that are allocated to the development endpoint. The maximum number of workers you can define are 299 for G.1X, and 149 for G.2X.</td>
</tr>
<tr>
    <td><CopyableCode code="private_address" /></td>
    <td><code>string</code></td>
    <td>A private IP address to access the DevEndpoint within a VPC if the DevEndpoint is created within one. The PrivateAddress field is present only when you create the DevEndpoint within your VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="public_address" /></td>
    <td><code>string</code></td>
    <td>The public IP address used by this DevEndpoint. The PublicAddress field is present only when you create a non-virtual private cloud (VPC) DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>The public key to be used by this DevEndpoint for authentication. This attribute is provided for backward compatibility because the recommended attribute to use is public keys.</td>
</tr>
<tr>
    <td><CopyableCode code="public_keys" /></td>
    <td><code>array</code></td>
    <td>A list of public keys to be used by the DevEndpoints for authentication. Using this attribute is preferred over a single public key because the public keys allow you to have a different private key per client. If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the UpdateDevEndpoint API operation with the public key content in the deletePublicKeys attribute, and the list of new keys in the addPublicKeys attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used in this DevEndpoint. (pattern: &lt;code&gt;arn:aws:iam::\d&#123;12&#125;:role/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration" /></td>
    <td><code>string</code></td>
    <td>The name of the SecurityConfiguration structure to be used with this DevEndpoint. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>array</code></td>
    <td>A list of security group identifiers used in this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The subnet ID for this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private cloud (VPC) used by this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_type" /></td>
    <td><code>string</code></td>
    <td>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X. For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker. For the G.1X worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs. For the G.2X worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs. Known issue: when a development endpoint is created with the G.2X WorkerType configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. (Standard, G.1X, G.2X, G.025X, G.4X, G.8X, Z.2X)</td>
</tr>
<tr>
    <td><CopyableCode code="yarn_endpoint_address" /></td>
    <td><code>string</code></td>
    <td>The YARN endpoint address used by this DevEndpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="zeppelin_remote_spark_interpreter_port" /></td>
    <td><code>integer</code></td>
    <td>The Apache Zeppelin port for the remote Apache Spark interpreter.</td>
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
    <td><a href="#batch_get_dev_endpoints"><CopyableCode code="batch_get_dev_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of resource metadata for a given list of development endpoint names. After calling the ListDevEndpoints operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</td>
</tr>
<tr>
    <td><a href="#get_dev_endpoint"><CopyableCode code="get_dev_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specified development endpoint. When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</td>
</tr>
<tr>
    <td><a href="#get_dev_endpoints"><CopyableCode code="get_dev_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all the development endpoints in this Amazon Web Services account. When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</td>
</tr>
<tr>
    <td><a href="#create_dev_endpoint"><CopyableCode code="create_dev_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a new development endpoint.</td>
</tr>
<tr>
    <td><a href="#update_dev_endpoint"><CopyableCode code="update_dev_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a></td>
    <td></td>
    <td>Updates a specified development endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_dev_endpoint"><CopyableCode code="delete_dev_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified development endpoint.</td>
</tr>
<tr>
    <td><a href="#list_dev_endpoints"><CopyableCode code="list_dev_endpoints" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the names of all DevEndpoint resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</td>
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
    defaultValue="batch_get_dev_endpoints"
    values={[
        { label: 'batch_get_dev_endpoints', value: 'batch_get_dev_endpoints' },
        { label: 'get_dev_endpoint', value: 'get_dev_endpoint' },
        { label: 'get_dev_endpoints', value: 'get_dev_endpoints' }
    ]}
>
<TabItem value="batch_get_dev_endpoints">

Returns a list of resource metadata for a given list of development endpoint names. After calling the ListDevEndpoints operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.

```sql
SELECT
dev_endpoints,
dev_endpoints_not_found
FROM aws.glue.dev_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_dev_endpoint">

Retrieves information about a specified development endpoint. When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.

```sql
SELECT
arguments,
availability_zone,
created_timestamp,
endpoint_name,
extra_jars_s3_path,
extra_python_libs_s3_path,
failure_reason,
glue_version,
last_modified_timestamp,
last_update_status,
number_of_nodes,
number_of_workers,
private_address,
public_address,
public_key,
public_keys,
role_arn,
security_configuration,
security_group_ids,
status,
subnet_id,
vpc_id,
worker_type,
yarn_endpoint_address,
zeppelin_remote_spark_interpreter_port
FROM aws.glue.dev_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_dev_endpoints">

Retrieves all the development endpoints in this Amazon Web Services account. When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.

```sql
SELECT
arguments,
availability_zone,
created_timestamp,
endpoint_name,
extra_jars_s3_path,
extra_python_libs_s3_path,
failure_reason,
glue_version,
last_modified_timestamp,
last_update_status,
number_of_nodes,
number_of_workers,
private_address,
public_address,
public_key,
public_keys,
role_arn,
security_configuration,
security_group_ids,
status,
subnet_id,
vpc_id,
worker_type,
yarn_endpoint_address,
zeppelin_remote_spark_interpreter_port
FROM aws.glue.dev_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dev_endpoint"
    values={[
        { label: 'create_dev_endpoint', value: 'create_dev_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dev_endpoint">

Creates a new development endpoint.

```sql
INSERT INTO aws.glue.dev_endpoints (
EndpointName,
RoleArn,
SecurityGroupIds,
SubnetId,
PublicKey,
PublicKeys,
NumberOfNodes,
WorkerType,
GlueVersion,
NumberOfWorkers,
ExtraPythonLibsS3Path,
ExtraJarsS3Path,
SecurityConfiguration,
Tags,
Arguments,
region
)
SELECT 
'{{ EndpointName }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ SecurityGroupIds }}',
'{{ SubnetId }}',
'{{ PublicKey }}',
'{{ PublicKeys }}',
{{ NumberOfNodes }},
'{{ WorkerType }}',
'{{ GlueVersion }}',
{{ NumberOfWorkers }},
'{{ ExtraPythonLibsS3Path }}',
'{{ ExtraJarsS3Path }}',
'{{ SecurityConfiguration }}',
'{{ Tags }}',
'{{ Arguments }}',
'{{ region }}'
RETURNING
arguments,
availability_zone,
created_timestamp,
endpoint_name,
extra_jars_s3_path,
extra_python_libs_s3_path,
failure_reason,
glue_version,
number_of_nodes,
number_of_workers,
role_arn,
security_configuration,
security_group_ids,
status,
subnet_id,
vpc_id,
worker_type,
yarn_endpoint_address,
zeppelin_remote_spark_interpreter_port
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dev_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dev_endpoints resource.
    - name: EndpointName
      value: "{{ EndpointName }}"
      description: |
        The name to be assigned to the new DevEndpoint.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The IAM role for the DevEndpoint.
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
      description: |
        Security group IDs for the security groups to be used by the new DevEndpoint.
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: |
        The subnet ID for the new DevEndpoint to use.
    - name: PublicKey
      value: "{{ PublicKey }}"
      description: |
        The public key to be used by this DevEndpoint for authentication. This attribute is provided for backward compatibility because the recommended attribute to use is public keys.
    - name: PublicKeys
      value:
        - "{{ PublicKeys }}"
      description: |
        A list of public keys to be used by the development endpoints for authentication. The use of this attribute is preferred over a single public key because the public keys allow you to have a different private key per client. If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the UpdateDevEndpoint API with the public key content in the deletePublicKeys attribute, and the list of new keys in the addPublicKeys attribute.
    - name: NumberOfNodes
      value: {{ NumberOfNodes }}
      description: |
        The number of Glue Data Processing Units (DPUs) to allocate to this DevEndpoint.
    - name: WorkerType
      value: "{{ WorkerType }}"
      description: |
        The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X. For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker. For the G.1X worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs. For the G.2X worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs. Known issue: when a development endpoint is created with the G.2X WorkerType configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk.
      valid_values: ['Standard', 'G.1X', 'G.2X', 'G.025X', 'G.4X', 'G.8X', 'Z.2X']
    - name: GlueVersion
      value: "{{ GlueVersion }}"
      description: |
        Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Development endpoints that are created without specifying a Glue version default to Glue 0.9. You can specify a version of Python support for development endpoints by using the Arguments parameter in the CreateDevEndpoint or UpdateDevEndpoint APIs. If no arguments are provided, the version defaults to Python 2.
    - name: NumberOfWorkers
      value: {{ NumberOfWorkers }}
      description: |
        The number of workers of a defined workerType that are allocated to the development endpoint. The maximum number of workers you can define are 299 for G.1X, and 149 for G.2X.
    - name: ExtraPythonLibsS3Path
      value: "{{ ExtraPythonLibsS3Path }}"
      description: |
        The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma. You can only use pure Python libraries with a DevEndpoint. Libraries that rely on C extensions, such as the pandas Python data analysis library, are not yet supported.
    - name: ExtraJarsS3Path
      value: "{{ ExtraJarsS3Path }}"
      description: |
        The path to one or more Java .jar files in an S3 bucket that should be loaded in your DevEndpoint.
    - name: SecurityConfiguration
      value: "{{ SecurityConfiguration }}"
      description: |
        The name of the SecurityConfiguration structure to be used with this DevEndpoint.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide.
    - name: Arguments
      value: "{{ Arguments }}"
      description: |
        A map of arguments used to configure the DevEndpoint.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dev_endpoint"
    values={[
        { label: 'update_dev_endpoint', value: 'update_dev_endpoint' }
    ]}
>
<TabItem value="update_dev_endpoint">

Updates a specified development endpoint.

```sql
UPDATE aws.glue.dev_endpoints
SET 
EndpointName = '{{ EndpointName }}',
PublicKey = '{{ PublicKey }}',
AddPublicKeys = '{{ AddPublicKeys }}',
DeletePublicKeys = '{{ DeletePublicKeys }}',
CustomLibraries = '{{ CustomLibraries }}',
UpdateEtlLibraries = {{ UpdateEtlLibraries }},
DeleteArguments = '{{ DeleteArguments }}',
AddArguments = '{{ AddArguments }}'
WHERE 
region = '{{ region }}' --required
AND EndpointName = '{{ EndpointName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dev_endpoint"
    values={[
        { label: 'delete_dev_endpoint', value: 'delete_dev_endpoint' }
    ]}
>
<TabItem value="delete_dev_endpoint">

Deletes a specified development endpoint.

```sql
DELETE FROM aws.glue.dev_endpoints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_dev_endpoints"
    values={[
        { label: 'list_dev_endpoints', value: 'list_dev_endpoints' }
    ]}
>
<TabItem value="list_dev_endpoints">

Retrieves the names of all DevEndpoint resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.

```sql
EXEC aws.glue.dev_endpoints.list_dev_endpoints 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>

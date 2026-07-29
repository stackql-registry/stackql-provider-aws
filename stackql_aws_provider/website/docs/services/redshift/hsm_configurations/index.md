--- 
title: hsm_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - hsm_configurations
  - redshift
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

Creates, updates, deletes, gets or lists a <code>hsm_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hsm_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.hsm_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hsm_configurations"
    values={[
        { label: 'describe_hsm_configurations', value: 'describe_hsm_configurations' }
    ]}
>
<TabItem value="describe_hsm_configurations">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A text description of the HSM configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="hsm_configuration_identifier" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Redshift HSM configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="hsm_ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address that the Amazon Redshift cluster must use to access the HSM.</td>
</tr>
<tr>
    <td><CopyableCode code="hsm_partition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The list of tags for the HSM configuration.</td>
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
    <td><a href="#describe_hsm_configurations"><CopyableCode code="describe_hsm_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HsmConfigurationIdentifier"><code>HsmConfigurationIdentifier</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all HSM connections that have any combination of those values are returned. If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.</td>
</tr>
<tr>
    <td><a href="#create_hsm_configuration"><CopyableCode code="create_hsm_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-HsmConfigurationIdentifier"><code>HsmConfigurationIdentifier</code></a>, <a href="#parameter-HsmIpAddress"><code>HsmIpAddress</code></a>, <a href="#parameter-HsmPartitionName"><code>HsmPartitionName</code></a>, <a href="#parameter-HsmPartitionPassword"><code>HsmPartitionPassword</code></a>, <a href="#parameter-HsmServerPublicCertificate"><code>HsmServerPublicCertificate</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM. In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to Hardware Security Modules in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#delete_hsm_configuration"><CopyableCode code="delete_hsm_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-HsmConfigurationIdentifier"><code>HsmConfigurationIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Amazon Redshift HSM configuration.</td>
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
<tr id="parameter-HsmConfigurationIdentifier">
    <td><CopyableCode code="HsmConfigurationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Redshift HSM configuration to be deleted.</td>
</tr>
<tr id="parameter-HsmIpAddress">
    <td><CopyableCode code="HsmIpAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address that the Amazon Redshift cluster must use to access the HSM.</td>
</tr>
<tr id="parameter-HsmPartitionName">
    <td><CopyableCode code="HsmPartitionName" /></td>
    <td><code>string</code></td>
    <td>The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.</td>
</tr>
<tr id="parameter-HsmPartitionPassword">
    <td><CopyableCode code="HsmPartitionPassword" /></td>
    <td><code>string</code></td>
    <td>The password required to access the HSM partition.</td>
</tr>
<tr id="parameter-HsmServerPublicCertificate">
    <td><CopyableCode code="HsmServerPublicCertificate" /></td>
    <td><code>string</code></td>
    <td>The HSMs public certificate file. When using Cloud HSM, the file name is server.pem.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A text description of the HSM configuration to be created.</td>
</tr>
<tr id="parameter-HsmConfigurationIdentifier">
    <td><CopyableCode code="HsmConfigurationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a specific Amazon Redshift HSM configuration to be described. If no identifier is specified, information is returned for all HSM configurations owned by your Amazon Web Services account.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeHsmConfigurations request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching HSM configurations that are associated with the specified key or keys. For example, suppose that you have HSM configurations that are tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the HSM configurations that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching HSM configurations that are associated with the specified tag value or values. For example, suppose that you have HSM configurations that are tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with the HSM configurations that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_hsm_configurations"
    values={[
        { label: 'describe_hsm_configurations', value: 'describe_hsm_configurations' }
    ]}
>
<TabItem value="describe_hsm_configurations">

Returns information about the specified Amazon Redshift HSM configuration. If no configuration ID is specified, returns information about all the HSM configurations owned by your Amazon Web Services account. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all HSM connections that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all HSM connections that have any combination of those values are returned. If both tag keys and values are omitted from the request, HSM connections are returned regardless of whether they have tag keys or values associated with them.

```sql
SELECT
description,
hsm_configuration_identifier,
hsm_ip_address,
hsm_partition_name,
tags
FROM aws.redshift.hsm_configurations
WHERE region = '{{ region }}' -- required
AND HsmConfigurationIdentifier = '{{ HsmConfigurationIdentifier }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND TagKeys = '{{ TagKeys }}'
AND TagValues = '{{ TagValues }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hsm_configuration"
    values={[
        { label: 'create_hsm_configuration', value: 'create_hsm_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hsm_configuration">

Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM). After creating the HSM configuration, you can specify it as a parameter when creating a cluster. The cluster will then store its encryption keys in the HSM. In addition to creating an HSM configuration, you must also create an HSM client certificate. For more information, go to Hardware Security Modules in the Amazon Redshift Cluster Management Guide.

```sql
INSERT INTO aws.redshift.hsm_configurations (
HsmConfigurationIdentifier,
HsmIpAddress,
HsmPartitionName,
HsmPartitionPassword,
HsmServerPublicCertificate,
region,
Description,
Tags
)
SELECT 
'{{ HsmConfigurationIdentifier }}',
'{{ HsmIpAddress }}',
'{{ HsmPartitionName }}',
'{{ HsmPartitionPassword }}',
'{{ HsmServerPublicCertificate }}',
'{{ region }}',
'{{ Description }}',
'{{ Tags }}'
RETURNING
description,
hsm_configuration_identifier,
hsm_ip_address,
hsm_partition_name,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hsm_configurations
  props:
    - name: HsmConfigurationIdentifier
      value: "{{ HsmConfigurationIdentifier }}"
      description: Required parameter for the hsm_configurations resource.
    - name: HsmIpAddress
      value: "{{ HsmIpAddress }}"
      description: Required parameter for the hsm_configurations resource.
    - name: HsmPartitionName
      value: "{{ HsmPartitionName }}"
      description: Required parameter for the hsm_configurations resource.
    - name: HsmPartitionPassword
      value: "{{ HsmPartitionPassword }}"
      description: Required parameter for the hsm_configurations resource.
    - name: HsmServerPublicCertificate
      value: "{{ HsmServerPublicCertificate }}"
      description: Required parameter for the hsm_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hsm_configurations resource.
    - name: Description
      value: "{{ Description }}"
      description: A text description of the HSM configuration to be created.
      description: A text description of the HSM configuration to be created.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hsm_configuration"
    values={[
        { label: 'delete_hsm_configuration', value: 'delete_hsm_configuration' }
    ]}
>
<TabItem value="delete_hsm_configuration">

Deletes the specified Amazon Redshift HSM configuration.

```sql
DELETE FROM aws.redshift.hsm_configurations
WHERE HsmConfigurationIdentifier = '{{ HsmConfigurationIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

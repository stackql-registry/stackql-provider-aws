--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - emr
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

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
    <td><CopyableCode code="applications" /></td>
    <td><code>array</code></td>
    <td>The applications installed on this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_scaling_role" /></td>
    <td><code>string</code></td>
    <td>An IAM role for automatic scaling policies. The default role is EMR_AutoScaling_DefaultRole. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate Amazon EC2 instances in an instance group. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_terminate" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the cluster should terminate after completing all steps.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>Applies only to Amazon EMR releases 4.x and later. The list of configurations that are supplied to the Amazon EMR cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_ami_id" /></td>
    <td><code>string</code></td>
    <td>Available only in Amazon EMR releases 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_root_volume_iops" /></td>
    <td><code>integer</code></td>
    <td>The IOPS, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_root_volume_size" /></td>
    <td><code>integer</code></td>
    <td>The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 4.x and later.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_root_volume_throughput" /></td>
    <td><code>integer</code></td>
    <td>The throughput, in MiB/s, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.</td>
</tr>
<tr>
    <td><CopyableCode code="ec_2_instance_attributes" /></td>
    <td><code>object</code></td>
    <td>Provides information about the Amazon EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.</td>
</tr>
<tr>
    <td><CopyableCode code="extended_support" /></td>
    <td><code>boolean</code></td>
    <td>Reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_collection_type" /></td>
    <td><code>string</code></td>
    <td>The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. The instance group configuration of the cluster. A value of INSTANCE_GROUP indicates a uniform instance group configuration. A value of INSTANCE_FLEET indicates an instance fleets configuration. (INSTANCE_FLEET, INSTANCE_GROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="kerberos_attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see Use Kerberos Authentication in the Amazon EMR Management Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="log_encryption_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The KMS key used for encrypting log files. This attribute is only available with Amazon EMR 5.30.0 and later, excluding Amazon EMR 6.0.0.</td>
</tr>
<tr>
    <td><CopyableCode code="log_uri" /></td>
    <td><code>string</code></td>
    <td>The path to the Amazon S3 location where logs for this cluster are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="master_public_dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains Cloudwatch log configuration metadata and settings.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster. This parameter can't contain the characters &lt;, &gt;, $, |, or ` (backtick).</td>
</tr>
<tr>
    <td><CopyableCode code="normalized_instance_hours" /></td>
    <td><code>integer</code></td>
    <td>An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an Amazon EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.</td>
</tr>
<tr>
    <td><CopyableCode code="os_release_label" /></td>
    <td><code>string</code></td>
    <td>The Amazon Linux release specified in a cluster launch RunJobFlow request. If no Amazon Linux release was specified, the default Amazon Linux release is shown in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost where the cluster is launched.</td>
</tr>
<tr>
    <td><CopyableCode code="placement_groups" /></td>
    <td><code>array</code></td>
    <td>Placement group configured for an Amazon EMR cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form emr-x.x.x, where x.x.x is an Amazon EMR release version such as emr-5.14.0. For more information about Amazon EMR release versions and included application versions and features, see https:​//docs.aws.amazon.com/emr/latest/ReleaseGuide/. The release label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use AmiVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="repo_upgrade_on_boot" /></td>
    <td><code>string</code></td>
    <td>Applies only when CustomAmiID is used. Specifies the type of updates that the Amazon Linux AMI package repositories apply when an instance boots using the AMI. (SECURITY, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_ami_version" /></td>
    <td><code>string</code></td>
    <td>The AMI version requested for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="running_ami_version" /></td>
    <td><code>string</code></td>
    <td>The AMI version running on this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scale_down_behavior" /></td>
    <td><code>string</code></td>
    <td>The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. TERMINATE_AT_INSTANCE_HOUR indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. TERMINATE_AT_TASK_COMPLETION indicates that Amazon EMR adds nodes to a deny list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. TERMINATE_AT_TASK_COMPLETION is available only in Amazon EMR releases 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0. (TERMINATE_AT_INSTANCE_HOUR, TERMINATE_AT_TASK_COMPLETION)</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration" /></td>
    <td><code>string</code></td>
    <td>The name of the security configuration applied to the cluster. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_role" /></td>
    <td><code>string</code></td>
    <td>The IAM role that Amazon EMR assumes in order to access Amazon Web Services resources on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status details about the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="step_concurrency_level" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of steps that can be executed concurrently.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="termination_protected" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Amazon EMR will lock the cluster to prevent the Amazon EC2 instances from being terminated by an API call or user intervention, or in the event of a cluster error.</td>
</tr>
<tr>
    <td><CopyableCode code="unhealthy_node_replacement" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Amazon EMR should gracefully replace Amazon EC2 core instances that have degraded within the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="visible_to_all_users" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the cluster is visible to IAM principals in the Amazon Web Services account associated with the cluster. When true, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster actions on the cluster that their IAM policies allow. When false, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform Amazon EMR actions, regardless of IAM permissions policies attached to other IAM principals. The default value is true if a value is not provided when creating a cluster using the Amazon EMR API RunJobFlow command, the CLI create-cluster command, or the Amazon Web Services Management Console.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_clusters">

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
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="normalized_instance_hours" /></td>
    <td><code>integer</code></td>
    <td>An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an Amazon EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost where the cluster is launched.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The details about the current status of the cluster.</td>
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
    <td><a href="#describe_cluster"><CopyableCode code="describe_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.</td>
</tr>
<tr>
    <td><a href="#modify_cluster"><CopyableCode code="modify_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a></td>
    <td></td>
    <td>Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.</td>
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
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.

```sql
SELECT
applications,
auto_scaling_role,
auto_terminate,
cluster_arn,
configurations,
custom_ami_id,
ebs_root_volume_iops,
ebs_root_volume_size,
ebs_root_volume_throughput,
ec_2_instance_attributes,
extended_support,
id,
instance_collection_type,
kerberos_attributes,
log_encryption_kms_key_id,
log_uri,
master_public_dns_name,
monitoring_configuration,
name,
normalized_instance_hours,
os_release_label,
outpost_arn,
placement_groups,
release_label,
repo_upgrade_on_boot,
requested_ami_version,
running_ami_version,
scale_down_behavior,
security_configuration,
service_role,
status,
step_concurrency_level,
tags,
termination_protected,
unhealthy_node_replacement,
visible_to_all_users
FROM aws.emr.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters">

Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.

```sql
SELECT
cluster_arn,
id,
name,
normalized_instance_hours,
outpost_arn,
status
FROM aws.emr.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_cluster"
    values={[
        { label: 'modify_cluster', value: 'modify_cluster' }
    ]}
>
<TabItem value="modify_cluster">

Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.

```sql
UPDATE aws.emr.clusters
SET 
ClusterId = '{{ ClusterId }}',
StepConcurrencyLevel = {{ StepConcurrencyLevel }},
ExtendedSupport = {{ ExtendedSupport }}
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required
RETURNING
extended_support,
step_concurrency_level;
```
</TabItem>
</Tabs>

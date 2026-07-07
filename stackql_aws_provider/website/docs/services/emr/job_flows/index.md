--- 
title: job_flows
hide_title: false
hide_table_of_contents: false
keywords:
  - job_flows
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

Creates, updates, deletes, gets or lists a <code>job_flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.job_flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job_flows"
    values={[
        { label: 'describe_job_flows', value: 'describe_job_flows' }
    ]}
>
<TabItem value="describe_job_flows">

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
    <td><CopyableCode code="JobFlows" /></td>
    <td><code>array</code></td>
    <td>A list of job flows matching the parameters supplied.</td>
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
    <td><a href="#describe_job_flows"><CopyableCode code="describe_job_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is no longer supported and will eventually be removed. We recommend you use ListClusters, DescribeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead. DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time. Regardless of supplied parameters, only job flows created within the last two months are returned. If no parameters are supplied, then job flows matching either of the following criteria are returned: Job flows created and completed in the last two weeks Job flows created within the last two months that are in one of the following states: RUNNING, WAITING, SHUTTING_DOWN, STARTING Amazon EMR can return a maximum of 512 job flow descriptions.</td>
</tr>
<tr>
    <td><a href="#set_termination_protection"><CopyableCode code="set_termination_protection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobFlowIds"><code>JobFlowIds</code></a>, <a href="#parameter-TerminationProtected"><code>TerminationProtected</code></a></td>
    <td></td>
    <td>SetTerminationProtection locks a cluster (job flow) so the Amazon EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling SetTerminationProtection on a cluster is similar to calling the Amazon EC2 DisableAPITermination API on all Amazon EC2 instances in a cluster. SetTerminationProtection is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage. To terminate a cluster that has been locked by setting SetTerminationProtection to true, you must first unlock the job flow by a subsequent call to SetTerminationProtection in which you set the value to false. For more information, see Managing Cluster Termination in the Amazon EMR Management Guide.</td>
</tr>
<tr>
    <td><a href="#set_unhealthy_node_replacement"><CopyableCode code="set_unhealthy_node_replacement" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobFlowIds"><code>JobFlowIds</code></a>, <a href="#parameter-UnhealthyNodeReplacement"><code>UnhealthyNodeReplacement</code></a></td>
    <td></td>
    <td>Specify whether to enable unhealthy node replacement, which lets Amazon EMR gracefully replace core nodes on a cluster if any nodes become unhealthy. For example, a node becomes unhealthy if disk usage is above 90%. If unhealthy node replacement is on and TerminationProtected are off, Amazon EMR immediately terminates the unhealthy core nodes. To use unhealthy node replacement and retain unhealthy core nodes, use to turn on termination protection. In such cases, Amazon EMR adds the unhealthy nodes to a denylist, reducing job interruptions and failures. If unhealthy node replacement is on, Amazon EMR notifies YARN and other applications on the cluster to stop scheduling tasks with these nodes, moves the data, and then terminates the nodes. For more information, see graceful node replacement in the Amazon EMR Management Guide.</td>
</tr>
<tr>
    <td><a href="#set_visible_to_all_users"><CopyableCode code="set_visible_to_all_users" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobFlowIds"><code>JobFlowIds</code></a>, <a href="#parameter-VisibleToAllUsers"><code>VisibleToAllUsers</code></a></td>
    <td></td>
    <td>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see Identity and Access Management for Amazon EMR. Sets the Cluster$VisibleToAllUsers value for an Amazon EMR cluster. When true, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster actions that their IAM policies allow. When false, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform Amazon EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals. This action works on running clusters. When you create a cluster, use the RunJobFlowInput$VisibleToAllUsers parameter. For more information, see Understanding the Amazon EMR Cluster VisibleToAllUsers Setting in the Amazon EMR Management Guide.</td>
</tr>
<tr>
    <td><a href="#terminate_job_flows"><CopyableCode code="terminate_job_flows" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the Amazon EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created. The maximum number of clusters allowed is 10. The call to TerminateJobFlows is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</td>
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
    defaultValue="describe_job_flows"
    values={[
        { label: 'describe_job_flows', value: 'describe_job_flows' }
    ]}
>
<TabItem value="describe_job_flows">

This API is no longer supported and will eventually be removed. We recommend you use ListClusters, DescribeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead. DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time. Regardless of supplied parameters, only job flows created within the last two months are returned. If no parameters are supplied, then job flows matching either of the following criteria are returned: Job flows created and completed in the last two weeks Job flows created within the last two months that are in one of the following states: RUNNING, WAITING, SHUTTING_DOWN, STARTING Amazon EMR can return a maximum of 512 job flow descriptions.

```sql
SELECT
JobFlows
FROM aws.emr.job_flows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_termination_protection"
    values={[
        { label: 'set_termination_protection', value: 'set_termination_protection' },
        { label: 'set_unhealthy_node_replacement', value: 'set_unhealthy_node_replacement' },
        { label: 'set_visible_to_all_users', value: 'set_visible_to_all_users' }
    ]}
>
<TabItem value="set_termination_protection">

SetTerminationProtection locks a cluster (job flow) so the Amazon EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling SetTerminationProtection on a cluster is similar to calling the Amazon EC2 DisableAPITermination API on all Amazon EC2 instances in a cluster. SetTerminationProtection is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage. To terminate a cluster that has been locked by setting SetTerminationProtection to true, you must first unlock the job flow by a subsequent call to SetTerminationProtection in which you set the value to false. For more information, see Managing Cluster Termination in the Amazon EMR Management Guide.

```sql
UPDATE aws.emr.job_flows
SET 
JobFlowIds = '{{ JobFlowIds }}',
TerminationProtected = {{ TerminationProtected }}
WHERE 
region = '{{ region }}' --required
AND JobFlowIds = '{{ JobFlowIds }}' --required
AND TerminationProtected = {{ TerminationProtected }} --required;
```
</TabItem>
<TabItem value="set_unhealthy_node_replacement">

Specify whether to enable unhealthy node replacement, which lets Amazon EMR gracefully replace core nodes on a cluster if any nodes become unhealthy. For example, a node becomes unhealthy if disk usage is above 90%. If unhealthy node replacement is on and TerminationProtected are off, Amazon EMR immediately terminates the unhealthy core nodes. To use unhealthy node replacement and retain unhealthy core nodes, use to turn on termination protection. In such cases, Amazon EMR adds the unhealthy nodes to a denylist, reducing job interruptions and failures. If unhealthy node replacement is on, Amazon EMR notifies YARN and other applications on the cluster to stop scheduling tasks with these nodes, moves the data, and then terminates the nodes. For more information, see graceful node replacement in the Amazon EMR Management Guide.

```sql
UPDATE aws.emr.job_flows
SET 
JobFlowIds = '{{ JobFlowIds }}',
UnhealthyNodeReplacement = {{ UnhealthyNodeReplacement }}
WHERE 
region = '{{ region }}' --required
AND JobFlowIds = '{{ JobFlowIds }}' --required
AND UnhealthyNodeReplacement = {{ UnhealthyNodeReplacement }} --required;
```
</TabItem>
<TabItem value="set_visible_to_all_users">

The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be visible to all users in your account. To restrict cluster access using an IAM policy, see Identity and Access Management for Amazon EMR. Sets the Cluster$VisibleToAllUsers value for an Amazon EMR cluster. When true, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster actions that their IAM policies allow. When false, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform Amazon EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals. This action works on running clusters. When you create a cluster, use the RunJobFlowInput$VisibleToAllUsers parameter. For more information, see Understanding the Amazon EMR Cluster VisibleToAllUsers Setting in the Amazon EMR Management Guide.

```sql
UPDATE aws.emr.job_flows
SET 
JobFlowIds = '{{ JobFlowIds }}',
VisibleToAllUsers = {{ VisibleToAllUsers }}
WHERE 
region = '{{ region }}' --required
AND JobFlowIds = '{{ JobFlowIds }}' --required
AND VisibleToAllUsers = {{ VisibleToAllUsers }} --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_job_flows"
    values={[
        { label: 'terminate_job_flows', value: 'terminate_job_flows' }
    ]}
>
<TabItem value="terminate_job_flows">

TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the Amazon EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created. The maximum number of clusters allowed is 10. The call to TerminateJobFlows is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.

```sql
DELETE FROM aws.emr.job_flows
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>

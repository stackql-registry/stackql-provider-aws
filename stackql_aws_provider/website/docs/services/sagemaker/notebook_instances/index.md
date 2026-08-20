--- 
title: notebook_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - notebook_instances
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>notebook_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebook_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.notebook_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notebook_instance"
    values={[
        { label: 'describe_notebook_instance', value: 'describe_notebook_instance' },
        { label: 'list_notebook_instances', value: 'list_notebook_instances' }
    ]}
>
<TabItem value="describe_notebook_instance">

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
    <td><CopyableCode code="accelerator_types" /></td>
    <td><code>array</code></td>
    <td>This parameter is no longer supported. Elastic Inference (EI) is no longer available. This parameter was used to specify a list of the EI instance types associated with this notebook instance.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_code_repositories" /></td>
    <td><code>array</code></td>
    <td>An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in Amazon Web Services CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with SageMaker AI Notebook Instances.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp. Use this parameter to return the time when the notebook instance was created</td>
</tr>
<tr>
    <td><CopyableCode code="default_code_repository" /></td>
    <td><code>string</code></td>
    <td>The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in Amazon Web Services CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with SageMaker AI Notebook Instances. (pattern: &lt;code&gt;https:​//(&#91;^/&#93;+)/?(.*)$|^&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="direct_internet_access" /></td>
    <td><code>string</code></td>
    <td>Describes whether SageMaker AI provides internet access to the notebook instance. If this value is set to Disabled, the notebook instance does not have internet access, and cannot connect to SageMaker AI training and endpoint services. For more information, see Notebook Instances Are Internet-Enabled by Default. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If status is Failed, the reason it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_metadata_service_configuration" /></td>
    <td><code>object</code></td>
    <td>Information on the IMDS configuration of the notebook instance</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The type of ML compute instance running on the notebook instance. (ml.t2.medium, ml.t2.large, ml.t2.xlarge, ml.t2.2xlarge, ml.t3.medium, ml.t3.large, ml.t3.xlarge, ml.t3.2xlarge, ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.12xlarge, ml.m5.24xlarge, ml.m5d.large, ml.m5d.xlarge, ml.m5d.2xlarge, ml.m5d.4xlarge, ml.m5d.8xlarge, ml.m5d.12xlarge, ml.m5d.16xlarge, ml.m5d.24xlarge, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.4xlarge, ml.c4.8xlarge, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge, ml.c5d.xlarge, ml.c5d.2xlarge, ml.c5d.4xlarge, ml.c5d.9xlarge, ml.c5d.18xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.p3dn.24xlarge, ml.g4dn.xlarge, ml.g4dn.2xlarge, ml.g4dn.4xlarge, ml.g4dn.8xlarge, ml.g4dn.12xlarge, ml.g4dn.16xlarge, ml.r5.large, ml.r5.xlarge, ml.r5.2xlarge, ml.r5.4xlarge, ml.r5.8xlarge, ml.r5.12xlarge, ml.r5.16xlarge, ml.r5.24xlarge, ml.g5.xlarge, ml.g5.2xlarge, ml.g5.4xlarge, ml.g5.8xlarge, ml.g5.16xlarge, ml.g5.12xlarge, ml.g5.24xlarge, ml.g5.48xlarge, ml.inf1.xlarge, ml.inf1.2xlarge, ml.inf1.6xlarge, ml.inf1.24xlarge, ml.trn1.2xlarge, ml.trn1.32xlarge, ml.trn1n.32xlarge, ml.inf2.xlarge, ml.inf2.8xlarge, ml.inf2.24xlarge, ml.inf2.48xlarge, ml.p4d.24xlarge, ml.p4de.24xlarge, ml.p5.48xlarge, ml.p6-b200.48xlarge, ml.m6i.large, ml.m6i.xlarge, ml.m6i.2xlarge, ml.m6i.4xlarge, ml.m6i.8xlarge, ml.m6i.12xlarge, ml.m6i.16xlarge, ml.m6i.24xlarge, ml.m6i.32xlarge, ml.m7i.large, ml.m7i.xlarge, ml.m7i.2xlarge, ml.m7i.4xlarge, ml.m7i.8xlarge, ml.m7i.12xlarge, ml.m7i.16xlarge, ml.m7i.24xlarge, ml.m7i.48xlarge, ml.c6i.large, ml.c6i.xlarge, ml.c6i.2xlarge, ml.c6i.4xlarge, ml.c6i.8xlarge, ml.c6i.12xlarge, ml.c6i.16xlarge, ml.c6i.24xlarge, ml.c6i.32xlarge, ml.c7i.large, ml.c7i.xlarge, ml.c7i.2xlarge, ml.c7i.4xlarge, ml.c7i.8xlarge, ml.c7i.12xlarge, ml.c7i.16xlarge, ml.c7i.24xlarge, ml.c7i.48xlarge, ml.r6i.large, ml.r6i.xlarge, ml.r6i.2xlarge, ml.r6i.4xlarge, ml.r6i.8xlarge, ml.r6i.12xlarge, ml.r6i.16xlarge, ml.r6i.24xlarge, ml.r6i.32xlarge, ml.r7i.large, ml.r7i.xlarge, ml.r7i.2xlarge, ml.r7i.4xlarge, ml.r7i.8xlarge, ml.r7i.12xlarge, ml.r7i.16xlarge, ml.r7i.24xlarge, ml.r7i.48xlarge, ml.m6id.large, ml.m6id.xlarge, ml.m6id.2xlarge, ml.m6id.4xlarge, ml.m6id.8xlarge, ml.m6id.12xlarge, ml.m6id.16xlarge, ml.m6id.24xlarge, ml.m6id.32xlarge, ml.c6id.large, ml.c6id.xlarge, ml.c6id.2xlarge, ml.c6id.4xlarge, ml.c6id.8xlarge, ml.c6id.12xlarge, ml.c6id.16xlarge, ml.c6id.24xlarge, ml.c6id.32xlarge, ml.r6id.large, ml.r6id.xlarge, ml.r6id.2xlarge, ml.r6id.4xlarge, ml.r6id.8xlarge, ml.r6id.12xlarge, ml.r6id.16xlarge, ml.r6id.24xlarge, ml.r6id.32xlarge, ml.g6.xlarge, ml.g6.2xlarge, ml.g6.4xlarge, ml.g6.8xlarge, ml.g6.12xlarge, ml.g6.16xlarge, ml.g6.24xlarge, ml.g6.48xlarge, ml.g7e.2xlarge, ml.g7e.4xlarge, ml.g7e.8xlarge, ml.g7e.12xlarge, ml.g7e.24xlarge, ml.g7e.48xlarge, ml.p5.4xlarge, ml.p5en.48xlarge, ml.g6e.xlarge, ml.g6e.2xlarge, ml.g6e.4xlarge, ml.g6e.8xlarge, ml.g6e.12xlarge, ml.g6e.16xlarge, ml.g6e.24xlarge, ml.g6e.48xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type configured for the notebook instance. Returns ipv4 for IPv4-only connectivity or dualstack for both IPv4 and IPv6 connectivity. (ipv4, dualstack)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key ID SageMaker AI uses to encrypt data when storing it on the ML storage volume attached to the instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp. Use this parameter to retrieve the time when the notebook instance was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_id" /></td>
    <td><code>string</code></td>
    <td>The network interface IDs that SageMaker AI created at the time of creating the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the notebook instance.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_lifecycle_config_name" /></td>
    <td><code>string</code></td>
    <td>Returns the name of a notebook instance lifecycle configuration. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_name" /></td>
    <td><code>string</code></td>
    <td>The name of the SageMaker AI notebook instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_status" /></td>
    <td><code>string</code></td>
    <td>The status of the notebook instance. (Pending, InService, Stopping, Stopped, Failed, Deleting, Updating, PendingMaintenance, InMaintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="platform_identifier" /></td>
    <td><code>string</code></td>
    <td>The platform identifier of the notebook instance runtime environment. (pattern: &lt;code&gt;(notebook-al1-v1|notebook-al2-v1|notebook-al2-v2|notebook-al2-v3|notebook-al2023-v1)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role associated with the instance. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="root_access" /></td>
    <td><code>string</code></td>
    <td>Whether root access is enabled or disabled for users of the notebook instance. Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPC security groups.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC subnet. (pattern: &lt;code&gt;&#91;-0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL that you use to connect to the Jupyter notebook that is running in your notebook instance.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_size_in_gb" /></td>
    <td><code>integer</code></td>
    <td>The size, in GB, of the ML storage volume attached to the notebook instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notebook_instances">

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
    <td><CopyableCode code="additional_code_repositories" /></td>
    <td><code>array</code></td>
    <td>An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in Amazon Web Services CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with SageMaker AI Notebook Instances.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the notebook instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_code_repository" /></td>
    <td><code>string</code></td>
    <td>The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in Amazon Web Services CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with SageMaker AI Notebook Instances. (pattern: &lt;code&gt;https:​//(&#91;^/&#93;+)/?(.*)$|^&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The type of ML compute instance that the notebook instance is running on. (ml.t2.medium, ml.t2.large, ml.t2.xlarge, ml.t2.2xlarge, ml.t3.medium, ml.t3.large, ml.t3.xlarge, ml.t3.2xlarge, ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.12xlarge, ml.m5.24xlarge, ml.m5d.large, ml.m5d.xlarge, ml.m5d.2xlarge, ml.m5d.4xlarge, ml.m5d.8xlarge, ml.m5d.12xlarge, ml.m5d.16xlarge, ml.m5d.24xlarge, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.4xlarge, ml.c4.8xlarge, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge, ml.c5d.xlarge, ml.c5d.2xlarge, ml.c5d.4xlarge, ml.c5d.9xlarge, ml.c5d.18xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.p3dn.24xlarge, ml.g4dn.xlarge, ml.g4dn.2xlarge, ml.g4dn.4xlarge, ml.g4dn.8xlarge, ml.g4dn.12xlarge, ml.g4dn.16xlarge, ml.r5.large, ml.r5.xlarge, ml.r5.2xlarge, ml.r5.4xlarge, ml.r5.8xlarge, ml.r5.12xlarge, ml.r5.16xlarge, ml.r5.24xlarge, ml.g5.xlarge, ml.g5.2xlarge, ml.g5.4xlarge, ml.g5.8xlarge, ml.g5.16xlarge, ml.g5.12xlarge, ml.g5.24xlarge, ml.g5.48xlarge, ml.inf1.xlarge, ml.inf1.2xlarge, ml.inf1.6xlarge, ml.inf1.24xlarge, ml.trn1.2xlarge, ml.trn1.32xlarge, ml.trn1n.32xlarge, ml.inf2.xlarge, ml.inf2.8xlarge, ml.inf2.24xlarge, ml.inf2.48xlarge, ml.p4d.24xlarge, ml.p4de.24xlarge, ml.p5.48xlarge, ml.p6-b200.48xlarge, ml.m6i.large, ml.m6i.xlarge, ml.m6i.2xlarge, ml.m6i.4xlarge, ml.m6i.8xlarge, ml.m6i.12xlarge, ml.m6i.16xlarge, ml.m6i.24xlarge, ml.m6i.32xlarge, ml.m7i.large, ml.m7i.xlarge, ml.m7i.2xlarge, ml.m7i.4xlarge, ml.m7i.8xlarge, ml.m7i.12xlarge, ml.m7i.16xlarge, ml.m7i.24xlarge, ml.m7i.48xlarge, ml.c6i.large, ml.c6i.xlarge, ml.c6i.2xlarge, ml.c6i.4xlarge, ml.c6i.8xlarge, ml.c6i.12xlarge, ml.c6i.16xlarge, ml.c6i.24xlarge, ml.c6i.32xlarge, ml.c7i.large, ml.c7i.xlarge, ml.c7i.2xlarge, ml.c7i.4xlarge, ml.c7i.8xlarge, ml.c7i.12xlarge, ml.c7i.16xlarge, ml.c7i.24xlarge, ml.c7i.48xlarge, ml.r6i.large, ml.r6i.xlarge, ml.r6i.2xlarge, ml.r6i.4xlarge, ml.r6i.8xlarge, ml.r6i.12xlarge, ml.r6i.16xlarge, ml.r6i.24xlarge, ml.r6i.32xlarge, ml.r7i.large, ml.r7i.xlarge, ml.r7i.2xlarge, ml.r7i.4xlarge, ml.r7i.8xlarge, ml.r7i.12xlarge, ml.r7i.16xlarge, ml.r7i.24xlarge, ml.r7i.48xlarge, ml.m6id.large, ml.m6id.xlarge, ml.m6id.2xlarge, ml.m6id.4xlarge, ml.m6id.8xlarge, ml.m6id.12xlarge, ml.m6id.16xlarge, ml.m6id.24xlarge, ml.m6id.32xlarge, ml.c6id.large, ml.c6id.xlarge, ml.c6id.2xlarge, ml.c6id.4xlarge, ml.c6id.8xlarge, ml.c6id.12xlarge, ml.c6id.16xlarge, ml.c6id.24xlarge, ml.c6id.32xlarge, ml.r6id.large, ml.r6id.xlarge, ml.r6id.2xlarge, ml.r6id.4xlarge, ml.r6id.8xlarge, ml.r6id.12xlarge, ml.r6id.16xlarge, ml.r6id.24xlarge, ml.r6id.32xlarge, ml.g6.xlarge, ml.g6.2xlarge, ml.g6.4xlarge, ml.g6.8xlarge, ml.g6.12xlarge, ml.g6.16xlarge, ml.g6.24xlarge, ml.g6.48xlarge, ml.g7e.2xlarge, ml.g7e.4xlarge, ml.g7e.8xlarge, ml.g7e.12xlarge, ml.g7e.24xlarge, ml.g7e.48xlarge, ml.p5.4xlarge, ml.p5en.48xlarge, ml.g6e.xlarge, ml.g6e.2xlarge, ml.g6e.4xlarge, ml.g6e.8xlarge, ml.g6e.12xlarge, ml.g6e.16xlarge, ml.g6e.24xlarge, ml.g6e.48xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the notebook instance was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the notebook instance.</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_lifecycle_config_name" /></td>
    <td><code>string</code></td>
    <td>The name of a notebook instance lifecycle configuration associated with this notebook instance. For information about notebook instance lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_name" /></td>
    <td><code>string</code></td>
    <td>The name of the notebook instance that you want a summary for. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notebook_instance_status" /></td>
    <td><code>string</code></td>
    <td>The status of the notebook instance. (Pending, InService, Stopping, Stopped, Failed, Deleting, Updating, PendingMaintenance, InMaintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL that you use to connect to the Jupyter notebook running in your notebook instance.</td>
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
    <td><a href="#describe_notebook_instance"><CopyableCode code="describe_notebook_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a notebook instance.</td>
</tr>
<tr>
    <td><a href="#list_notebook_instances"><CopyableCode code="list_notebook_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the SageMaker AI notebook instances in the requester's account in an Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_notebook_instance"><CopyableCode code="create_notebook_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotebookInstanceName"><code>NotebookInstanceName</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an SageMaker AI notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. In a CreateNotebookInstance request, specify the type of ML compute instance that you want to run. SageMaker AI launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. SageMaker AI also provides a set of example notebooks. Each notebook demonstrates how to use SageMaker AI with a specific algorithm or with a machine learning framework. After receiving the request, SageMaker AI does the following: Creates a network interface in the SageMaker AI VPC. (Option) If you specified SubnetId, SageMaker AI creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, SageMaker AI attaches the security group that you specified in the request to the network interface that it creates in your VPC. Launches an EC2 instance of the type specified in the request in the SageMaker AI VPC. If you specified SubnetId of your VPC, SageMaker AI specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it. After creating the notebook instance, SageMaker AI returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it. After SageMaker AI creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating SageMaker AI endpoints, and validate hosted models. For more information, see How It Works.</td>
</tr>
<tr>
    <td><a href="#create_presigned_notebook_instance_url"><CopyableCode code="create_presigned_notebook_instance_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotebookInstanceName"><code>NotebookInstanceName</code></a></td>
    <td></td>
    <td>Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the SageMaker AI console, when you choose Open next to a notebook instance, SageMaker AI opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page. The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance. You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the NotIpAddress condition operator and the aws:SourceIP condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see Limit Access to a Notebook Instance by IP Address. The URL that you get from a call to CreatePresignedNotebookInstanceUrl is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page.</td>
</tr>
<tr>
    <td><a href="#update_notebook_instance"><CopyableCode code="update_notebook_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotebookInstanceName"><code>NotebookInstanceName</code></a></td>
    <td></td>
    <td>Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements. This API can attach lifecycle configurations to notebook instances. Lifecycle configuration scripts execute with root access and the notebook instance's IAM execution role privileges. Principals with this permission and access to lifecycle configurations can execute code with the execution role's credentials. See Customize a Notebook Instance Using a Lifecycle Configuration Script for security best practices.</td>
</tr>
<tr>
    <td><a href="#delete_notebook_instance"><CopyableCode code="delete_notebook_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an SageMaker AI notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API. When you delete a notebook instance, you lose all of your data. SageMaker AI removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance.</td>
</tr>
<tr>
    <td><a href="#start_notebook_instance"><CopyableCode code="start_notebook_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotebookInstanceName"><code>NotebookInstanceName</code></a></td>
    <td></td>
    <td>Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, SageMaker AI sets the notebook instance status to InService. A notebook instance's status must be InService before you can connect to your Jupyter notebook.</td>
</tr>
<tr>
    <td><a href="#stop_notebook_instance"><CopyableCode code="stop_notebook_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotebookInstanceName"><code>NotebookInstanceName</code></a></td>
    <td></td>
    <td>Terminates the ML compute instance. Before terminating the instance, SageMaker AI disconnects the ML storage volume from it. SageMaker AI preserves the ML storage volume. SageMaker AI stops charging you for the ML compute instance when you call StopNotebookInstance. To access data on the ML storage volume for a notebook instance that has been terminated, call the StartNotebookInstance API. StartNotebookInstance launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work.</td>
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
    defaultValue="describe_notebook_instance"
    values={[
        { label: 'describe_notebook_instance', value: 'describe_notebook_instance' },
        { label: 'list_notebook_instances', value: 'list_notebook_instances' }
    ]}
>
<TabItem value="describe_notebook_instance">

Returns information about a notebook instance.

```sql
SELECT
accelerator_types,
additional_code_repositories,
creation_time,
default_code_repository,
direct_internet_access,
failure_reason,
instance_metadata_service_configuration,
instance_type,
ip_address_type,
kms_key_id,
last_modified_time,
network_interface_id,
notebook_instance_arn,
notebook_instance_lifecycle_config_name,
notebook_instance_name,
notebook_instance_status,
platform_identifier,
role_arn,
root_access,
security_groups,
subnet_id,
url,
volume_size_in_gb
FROM aws.sagemaker.notebook_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_notebook_instances">

Returns a list of the SageMaker AI notebook instances in the requester's account in an Amazon Web Services Region.

```sql
SELECT
additional_code_repositories,
creation_time,
default_code_repository,
instance_type,
last_modified_time,
notebook_instance_arn,
notebook_instance_lifecycle_config_name,
notebook_instance_name,
notebook_instance_status,
url
FROM aws.sagemaker.notebook_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_notebook_instance"
    values={[
        { label: 'create_notebook_instance', value: 'create_notebook_instance' },
        { label: 'create_presigned_notebook_instance_url', value: 'create_presigned_notebook_instance_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notebook_instance">

Creates an SageMaker AI notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. In a CreateNotebookInstance request, specify the type of ML compute instance that you want to run. SageMaker AI launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. SageMaker AI also provides a set of example notebooks. Each notebook demonstrates how to use SageMaker AI with a specific algorithm or with a machine learning framework. After receiving the request, SageMaker AI does the following: Creates a network interface in the SageMaker AI VPC. (Option) If you specified SubnetId, SageMaker AI creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, SageMaker AI attaches the security group that you specified in the request to the network interface that it creates in your VPC. Launches an EC2 instance of the type specified in the request in the SageMaker AI VPC. If you specified SubnetId of your VPC, SageMaker AI specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it. After creating the notebook instance, SageMaker AI returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it. After SageMaker AI creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating SageMaker AI endpoints, and validate hosted models. For more information, see How It Works.

```sql
INSERT INTO aws.sagemaker.notebook_instances (
NotebookInstanceName,
InstanceType,
SubnetId,
SecurityGroupIds,
IpAddressType,
RoleArn,
KmsKeyId,
Tags,
LifecycleConfigName,
DirectInternetAccess,
VolumeSizeInGB,
AcceleratorTypes,
DefaultCodeRepository,
AdditionalCodeRepositories,
RootAccess,
PlatformIdentifier,
InstanceMetadataServiceConfiguration,
region
)
SELECT 
'{{ NotebookInstanceName }}' /* required */,
'{{ InstanceType }}' /* required */,
'{{ SubnetId }}',
'{{ SecurityGroupIds }}',
'{{ IpAddressType }}',
'{{ RoleArn }}' /* required */,
'{{ KmsKeyId }}',
'{{ Tags }}',
'{{ LifecycleConfigName }}',
'{{ DirectInternetAccess }}',
{{ VolumeSizeInGB }},
'{{ AcceleratorTypes }}',
'{{ DefaultCodeRepository }}',
'{{ AdditionalCodeRepositories }}',
'{{ RootAccess }}',
'{{ PlatformIdentifier }}',
'{{ InstanceMetadataServiceConfiguration }}',
'{{ region }}'
RETURNING
notebook_instance_arn
;
```
</TabItem>
<TabItem value="create_presigned_notebook_instance_url">

Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the SageMaker AI console, when you choose Open next to a notebook instance, SageMaker AI opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page. The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance. You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the NotIpAddress condition operator and the aws:SourceIP condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see Limit Access to a Notebook Instance by IP Address. The URL that you get from a call to CreatePresignedNotebookInstanceUrl is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page.

```sql
INSERT INTO aws.sagemaker.notebook_instances (
NotebookInstanceName,
SessionExpirationDurationInSeconds,
region
)
SELECT 
'{{ NotebookInstanceName }}' /* required */,
{{ SessionExpirationDurationInSeconds }},
'{{ region }}'
RETURNING
authorized_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notebook_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notebook_instances resource.
    - name: NotebookInstanceName
      value: "{{ NotebookInstanceName }}"
      description: |
        The name of the notebook instance.
    - name: InstanceType
      value: "{{ InstanceType }}"
      description: |
        The type of ML compute instance to launch for the notebook instance.
      valid_values: ['ml.t2.medium', 'ml.t2.large', 'ml.t2.xlarge', 'ml.t2.2xlarge', 'ml.t3.medium', 'ml.t3.large', 'ml.t3.xlarge', 'ml.t3.2xlarge', 'ml.m4.xlarge', 'ml.m4.2xlarge', 'ml.m4.4xlarge', 'ml.m4.10xlarge', 'ml.m4.16xlarge', 'ml.m5.xlarge', 'ml.m5.2xlarge', 'ml.m5.4xlarge', 'ml.m5.12xlarge', 'ml.m5.24xlarge', 'ml.m5d.large', 'ml.m5d.xlarge', 'ml.m5d.2xlarge', 'ml.m5d.4xlarge', 'ml.m5d.8xlarge', 'ml.m5d.12xlarge', 'ml.m5d.16xlarge', 'ml.m5d.24xlarge', 'ml.c4.xlarge', 'ml.c4.2xlarge', 'ml.c4.4xlarge', 'ml.c4.8xlarge', 'ml.c5.xlarge', 'ml.c5.2xlarge', 'ml.c5.4xlarge', 'ml.c5.9xlarge', 'ml.c5.18xlarge', 'ml.c5d.xlarge', 'ml.c5d.2xlarge', 'ml.c5d.4xlarge', 'ml.c5d.9xlarge', 'ml.c5d.18xlarge', 'ml.p2.xlarge', 'ml.p2.8xlarge', 'ml.p2.16xlarge', 'ml.p3.2xlarge', 'ml.p3.8xlarge', 'ml.p3.16xlarge', 'ml.p3dn.24xlarge', 'ml.g4dn.xlarge', 'ml.g4dn.2xlarge', 'ml.g4dn.4xlarge', 'ml.g4dn.8xlarge', 'ml.g4dn.12xlarge', 'ml.g4dn.16xlarge', 'ml.r5.large', 'ml.r5.xlarge', 'ml.r5.2xlarge', 'ml.r5.4xlarge', 'ml.r5.8xlarge', 'ml.r5.12xlarge', 'ml.r5.16xlarge', 'ml.r5.24xlarge', 'ml.g5.xlarge', 'ml.g5.2xlarge', 'ml.g5.4xlarge', 'ml.g5.8xlarge', 'ml.g5.16xlarge', 'ml.g5.12xlarge', 'ml.g5.24xlarge', 'ml.g5.48xlarge', 'ml.inf1.xlarge', 'ml.inf1.2xlarge', 'ml.inf1.6xlarge', 'ml.inf1.24xlarge', 'ml.trn1.2xlarge', 'ml.trn1.32xlarge', 'ml.trn1n.32xlarge', 'ml.inf2.xlarge', 'ml.inf2.8xlarge', 'ml.inf2.24xlarge', 'ml.inf2.48xlarge', 'ml.p4d.24xlarge', 'ml.p4de.24xlarge', 'ml.p5.48xlarge', 'ml.p6-b200.48xlarge', 'ml.m6i.large', 'ml.m6i.xlarge', 'ml.m6i.2xlarge', 'ml.m6i.4xlarge', 'ml.m6i.8xlarge', 'ml.m6i.12xlarge', 'ml.m6i.16xlarge', 'ml.m6i.24xlarge', 'ml.m6i.32xlarge', 'ml.m7i.large', 'ml.m7i.xlarge', 'ml.m7i.2xlarge', 'ml.m7i.4xlarge', 'ml.m7i.8xlarge', 'ml.m7i.12xlarge', 'ml.m7i.16xlarge', 'ml.m7i.24xlarge', 'ml.m7i.48xlarge', 'ml.c6i.large', 'ml.c6i.xlarge', 'ml.c6i.2xlarge', 'ml.c6i.4xlarge', 'ml.c6i.8xlarge', 'ml.c6i.12xlarge', 'ml.c6i.16xlarge', 'ml.c6i.24xlarge', 'ml.c6i.32xlarge', 'ml.c7i.large', 'ml.c7i.xlarge', 'ml.c7i.2xlarge', 'ml.c7i.4xlarge', 'ml.c7i.8xlarge', 'ml.c7i.12xlarge', 'ml.c7i.16xlarge', 'ml.c7i.24xlarge', 'ml.c7i.48xlarge', 'ml.r6i.large', 'ml.r6i.xlarge', 'ml.r6i.2xlarge', 'ml.r6i.4xlarge', 'ml.r6i.8xlarge', 'ml.r6i.12xlarge', 'ml.r6i.16xlarge', 'ml.r6i.24xlarge', 'ml.r6i.32xlarge', 'ml.r7i.large', 'ml.r7i.xlarge', 'ml.r7i.2xlarge', 'ml.r7i.4xlarge', 'ml.r7i.8xlarge', 'ml.r7i.12xlarge', 'ml.r7i.16xlarge', 'ml.r7i.24xlarge', 'ml.r7i.48xlarge', 'ml.m6id.large', 'ml.m6id.xlarge', 'ml.m6id.2xlarge', 'ml.m6id.4xlarge', 'ml.m6id.8xlarge', 'ml.m6id.12xlarge', 'ml.m6id.16xlarge', 'ml.m6id.24xlarge', 'ml.m6id.32xlarge', 'ml.c6id.large', 'ml.c6id.xlarge', 'ml.c6id.2xlarge', 'ml.c6id.4xlarge', 'ml.c6id.8xlarge', 'ml.c6id.12xlarge', 'ml.c6id.16xlarge', 'ml.c6id.24xlarge', 'ml.c6id.32xlarge', 'ml.r6id.large', 'ml.r6id.xlarge', 'ml.r6id.2xlarge', 'ml.r6id.4xlarge', 'ml.r6id.8xlarge', 'ml.r6id.12xlarge', 'ml.r6id.16xlarge', 'ml.r6id.24xlarge', 'ml.r6id.32xlarge', 'ml.g6.xlarge', 'ml.g6.2xlarge', 'ml.g6.4xlarge', 'ml.g6.8xlarge', 'ml.g6.12xlarge', 'ml.g6.16xlarge', 'ml.g6.24xlarge', 'ml.g6.48xlarge', 'ml.g7e.2xlarge', 'ml.g7e.4xlarge', 'ml.g7e.8xlarge', 'ml.g7e.12xlarge', 'ml.g7e.24xlarge', 'ml.g7e.48xlarge', 'ml.p5.4xlarge', 'ml.p5en.48xlarge', 'ml.g6e.xlarge', 'ml.g6e.2xlarge', 'ml.g6e.4xlarge', 'ml.g6e.8xlarge', 'ml.g6e.12xlarge', 'ml.g6e.16xlarge', 'ml.g6e.24xlarge', 'ml.g6e.48xlarge']
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: |
        The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
      description: |
        The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: |
        The IP address type for the notebook instance. Specify ipv4 for IPv4-only connectivity or dualstack for both IPv4 and IPv6 connectivity. When you specify dualstack, the subnet must support IPv6 CIDR blocks. If not specified, defaults to ipv4.
      valid_values: ['ipv4', 'dualstack']
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        When you send any requests to Amazon Web Services resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf. You must grant this role necessary permissions so SageMaker AI can perform these tasks. The policy must allow the SageMaker AI service principal (sagemaker.amazonaws.com) permissions to assume this role. For more information, see SageMaker AI Roles. To be able to pass this role to SageMaker AI, the caller of this API must have the iam:PassRole permission.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. The KMS key you provide must be enabled. For information, see Enabling and Disabling Keys in the Amazon Web Services Key Management Service Developer Guide.
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: LifecycleConfigName
      value: "{{ LifecycleConfigName }}"
      description: |
        The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see Step 2.1: (Optional) Customize a Notebook Instance.
    - name: DirectInternetAccess
      value: "{{ DirectInternetAccess }}"
      description: |
        Sets whether SageMaker AI provides internet access to the notebook instance. If you set this to Disabled this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a NAT Gateway in your VPC. For more information, see Notebook Instances Are Internet-Enabled by Default. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter.
      valid_values: ['Enabled', 'Disabled']
    - name: VolumeSizeInGB
      value: {{ VolumeSizeInGB }}
      description: |
        The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB.
    - name: AcceleratorTypes
      value:
        - "{{ AcceleratorTypes }}"
      description: |
        This parameter is no longer supported. Elastic Inference (EI) is no longer available. This parameter was used to specify a list of EI instance types to associate with this notebook instance.
    - name: DefaultCodeRepository
      value: "{{ DefaultCodeRepository }}"
      description: |
        A Git repository to associate with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in Amazon Web Services CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see Associating Git Repositories with SageMaker AI Notebook Instances.
    - name: AdditionalCodeRepositories
      value:
        - "{{ AdditionalCodeRepositories }}"
      description: |
        An array of up to three Git repositories to associate with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in Amazon Web Services CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see Associating Git Repositories with SageMaker AI Notebook Instances.
    - name: RootAccess
      value: "{{ RootAccess }}"
      description: |
        Whether root access is enabled or disabled for users of the notebook instance. The default value is Enabled. Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.
      valid_values: ['Enabled', 'Disabled']
    - name: PlatformIdentifier
      value: "{{ PlatformIdentifier }}"
      description: |
        The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1.
    - name: InstanceMetadataServiceConfiguration
      description: |
        Information on the IMDS configuration of the notebook instance
      value:
        MinimumInstanceMetadataServiceVersion: "{{ MinimumInstanceMetadataServiceVersion }}"
    - name: SessionExpirationDurationInSeconds
      value: {{ SessionExpirationDurationInSeconds }}
      description: |
        The duration of the session, in seconds. The default is 12 hours.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notebook_instance"
    values={[
        { label: 'update_notebook_instance', value: 'update_notebook_instance' }
    ]}
>
<TabItem value="update_notebook_instance">

Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements. This API can attach lifecycle configurations to notebook instances. Lifecycle configuration scripts execute with root access and the notebook instance's IAM execution role privileges. Principals with this permission and access to lifecycle configurations can execute code with the execution role's credentials. See Customize a Notebook Instance Using a Lifecycle Configuration Script for security best practices.

```sql
UPDATE aws.sagemaker.notebook_instances
SET 
NotebookInstanceName = '{{ NotebookInstanceName }}',
InstanceType = '{{ InstanceType }}',
IpAddressType = '{{ IpAddressType }}',
PlatformIdentifier = '{{ PlatformIdentifier }}',
RoleArn = '{{ RoleArn }}',
LifecycleConfigName = '{{ LifecycleConfigName }}',
DisassociateLifecycleConfig = {{ DisassociateLifecycleConfig }},
VolumeSizeInGB = {{ VolumeSizeInGB }},
DefaultCodeRepository = '{{ DefaultCodeRepository }}',
AdditionalCodeRepositories = '{{ AdditionalCodeRepositories }}',
AcceleratorTypes = '{{ AcceleratorTypes }}',
DisassociateAcceleratorTypes = {{ DisassociateAcceleratorTypes }},
DisassociateDefaultCodeRepository = {{ DisassociateDefaultCodeRepository }},
DisassociateAdditionalCodeRepositories = {{ DisassociateAdditionalCodeRepositories }},
RootAccess = '{{ RootAccess }}',
InstanceMetadataServiceConfiguration = '{{ InstanceMetadataServiceConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND NotebookInstanceName = '{{ NotebookInstanceName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notebook_instance"
    values={[
        { label: 'delete_notebook_instance', value: 'delete_notebook_instance' }
    ]}
>
<TabItem value="delete_notebook_instance">

Deletes an SageMaker AI notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API. When you delete a notebook instance, you lose all of your data. SageMaker AI removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance.

```sql
DELETE FROM aws.sagemaker.notebook_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_notebook_instance"
    values={[
        { label: 'start_notebook_instance', value: 'start_notebook_instance' },
        { label: 'stop_notebook_instance', value: 'stop_notebook_instance' }
    ]}
>
<TabItem value="start_notebook_instance">

Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, SageMaker AI sets the notebook instance status to InService. A notebook instance's status must be InService before you can connect to your Jupyter notebook.

```sql
EXEC aws.sagemaker.notebook_instances.start_notebook_instance 
@region='{{ region }}' --required 
@@json=
'{
"NotebookInstanceName": "{{ NotebookInstanceName }}"
}'
;
```
</TabItem>
<TabItem value="stop_notebook_instance">

Terminates the ML compute instance. Before terminating the instance, SageMaker AI disconnects the ML storage volume from it. SageMaker AI preserves the ML storage volume. SageMaker AI stops charging you for the ML compute instance when you call StopNotebookInstance. To access data on the ML storage volume for a notebook instance that has been terminated, call the StartNotebookInstance API. StartNotebookInstance launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work.

```sql
EXEC aws.sagemaker.notebook_instances.stop_notebook_instance 
@region='{{ region }}' --required 
@@json=
'{
"NotebookInstanceName": "{{ NotebookInstanceName }}"
}'
;
```
</TabItem>
</Tabs>
